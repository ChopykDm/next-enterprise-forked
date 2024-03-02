'use client';
import { Container } from '@/components/Container'
import { useScroll, animated, useSpring } from '@react-spring/web'
import React from 'react';
import { SectionTitle } from '@/UIComponents/SectionTitle';
import { SectionSubTitle } from '@/UIComponents/SectionSubTitle';
import { useTranslation } from '@/i18n/client';
import { useAppStore } from '@/store/appStore';
import { ErrorMessage, TextField, TextareaField } from '@/components/Fields'
import { RadioGroup } from '@/UIComponents/RadioCard';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from '../Button';

const subjects = {
  Engineering: 'Engineering',
  Consulting: 'Consulting',
  Partnership: 'Partnership',
  Career: 'Career',
  Other: 'Other',
}

const schema = yup
  .object()
  .shape({
    subject: yup.string().required(),
    customSubject: yup.string().when('subject', {
      is: subjects.Other,
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.optional(),
    }),
    fullName: yup.string().required(),
    email: yup.string().email('AAA').required('BBB'),
    phone: yup.string().optional(),
    message: yup.string().required(),
  })
  .required()


interface Inputs extends yup.InferType<typeof schema> { }

export function ContactUsForm() {
  const { register, handleSubmit, setValue, formState, watch } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const errors = formState.errors

  const isCustomSubject = watch('subject') === subjects.Other;

  console.log(watch(), formState);

  register('subject');

  return (
    <form onSubmit={handleSubmit(() => {
      console.log('submit')
    }, () => {
      debugger;
    })} className='grid gap-4 sm:grid-cols-2 whitespace-nowrap'>
      <div className='col-span-2'>
        <RadioGroup label="Test 11111" onChange={(val) => {
          setValue('subject', val, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
          });
        }}>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
            {Object.entries(subjects).map(([key, value]) => (
              <RadioGroup.Option key={key} name={key} value={value} />
            ))}
          </div>
        </RadioGroup>
        {errors['subject'] && !isCustomSubject && <ErrorMessage message={errors['subject'].message} />}
      </div>
      <div className='col-span-2'>
        {isCustomSubject && (
          <TextField label="Subject" className='uppercase col-span-2' onChange={(e) => {
            setValue('customSubject', e.currentTarget.value, {
              shouldValidate: true,
              shouldDirty: true,
              shouldTouch: true,
            });
          }} />
        )}
        {errors['customSubject'] && isCustomSubject && <ErrorMessage message={errors['customSubject'].message} />}
      </div>
      <div className='col-span-2'>
        <TextField {...register("fullName")} label="Full Name (*)" className="uppercase" />
        {errors['fullName'] && <ErrorMessage message={errors['fullName'].message} />}
      </div>
      <div>
        <TextField {...register("email")} label="Email (*)" className='uppercase' />
        {errors['email'] && <ErrorMessage message={errors['email'].message} />}
      </div>
      <div>
        <TextField {...register("phone")} label="Phone" className='uppercase' />
        {errors['phone'] && <ErrorMessage message={errors['phone'].message} />}
      </div>
      <div className='col-span-2'>
        <TextareaField {...register("message")} label="Message (*)" className='uppercase' aria-invalid={!!errors['message']} />
        {errors['message'] && <ErrorMessage message={errors['message'].message} />}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  )
}

export function ContactUs() {
  const lang = useAppStore.getState().lang;
  const { t } = useTranslation(lang, 'contact-us');
  const containerRef = React.useRef<HTMLDivElement>(null!)
  const [textStyles, textApi] = useSpring(() => ({
    y: '100%',
  }))

  const { scrollYProgress } = useScroll({
    // container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      debugger;
      if (scrollYProgress > 0.7) {
        textApi.start({ y: '0' })
      } else {
        textApi.start({ y: '100%' })
      }
    },
    default: {
      immediate: true,
    },
  });

  return (
    <section
      id="contact-us"
      style={{ border: '1px solid black' }}
      aria-labelledby="contact-us-title"
      className="relative overflow-hidden py-20 sm:py-32"
      ref={containerRef}
    >
      <Container className="relative">
        <div className='lg:flex flex-wrap'>
          <div className="flex-1 lg:mx-0">
            <SectionTitle>
              <div>
                {t('title1')}
              </div>
              <div className="pl-28 font-sourcecodepro">
                {t('title2')}
              </div>
            </SectionTitle>
            <SectionSubTitle className='font-notosans'>
              {t('subtitle')}
            </SectionSubTitle>
          </div>
          <ContactUsForm />
        </div>
        <animated.div
          style={{
            clipPath: scrollYProgress.to(val => `circle(${val * 100}%)`),
          }}>
          <h1 >
            <span>
              <animated.span style={textStyles}>Aha!</animated.span>
            </span>
            <span>
              <animated.span style={textStyles}>You found me!</animated.span>
            </span>
          </h1>
        </animated.div>
      </Container>
    </section>
  )
}
