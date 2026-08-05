// "use client";

// import { useEffect } from "react";
// import { useParams, useRouter } from "next/navigation";
// import LoadingScreen from "@/ui/LoadingScreen";
// import { usePreloader } from "@/hooks/usePreloader";

// export default function PinRedirectPage() {
//   const router = useRouter();
//   const params = useParams();

//   const id = params.id;
//   const pin = params.pin;

//   const { progress } = usePreloader();

//   useEffect(() => {
//     if (typeof id !== "string" || typeof pin !== "string") {
//       return;
//     }

//     localStorage.setItem(`${id}-pin`, pin);

//     router.replace(`/${encodeURIComponent(id)}`);
//   }, [id, pin, router]);

//   return <LoadingScreen progress={progress} onDone={() => {}} />;
// }