'use client';

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {

    // @ts-ignore
    navigator.permissions.query({ name: "storage-access" }).then((result) => {
      if (result.state === "granted") {
        console.log('storage-access is granted');
      } else if (result.state === "prompt") {
        console.log('storage-access is prompt');
      }
      // Don't do anything if the permission was denied.
    });


    try {
      localStorage.setItem('TEST', 'true');
      console.log('localStorage is available');
    } catch (e) {
      console.error('localStorage is not available');

      document.hasStorageAccess().then((hasAccess) => {
        if (hasAccess) {
          console.log('hasStorageAccess is available');
        } else {
          console.error('hasStorageAccess is not available');

          document.requestStorageAccess().then(() => {
            console.log('requestStorageAccess is available');
          }).catch((e) => {
            console.error('requestStorageAccess is not available');
          });
        }
      });
    }

    try {
      sessionStorage.setItem('TEST', 'true');
      console.log('sessionStorage is available');
    } catch (e) {
      console.error('sessionStorage is not available');
    }
  }, []);

  return (
   <h1>
      Hello World
   </h1>
  )
}