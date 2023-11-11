import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useTranslation } from '@/i18n';
import { useAppStore } from '@/store/appStore';
// import backgroundImage from '@/images/background-call-to-action.jpg'

export async function CallToAction() {
  const lang = useAppStore.getState().lang;
  const { t } = await useTranslation(lang, 'callToAction');

  return (
    <div
      id="get-started-today"
      style={{ border: '1px solid black' }}
      className="relative overflow-hidden py-32"
      >
      {/* <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            {t('subtitle')}
          </p>
          <Button href="/register" color="white" className="mt-10">
            {t('button')}
          </Button>
        </div>
      </Container>
    </div>
  )
}
