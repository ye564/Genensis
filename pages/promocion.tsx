import PageAnimation from "@/components/PageAnimation";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import UsersTable from "@/components/UsersTable";
import TabBinaria from "@/components/NetworkTabs/Binaria";
import Retiro from "./retiro";

//export async function getStaticProps({ locale }: any) {
//  return {
//    props: {
//      ...(await serverSideTranslations(locale, ["common", "table"])),
//    },
//  };
//}

export default function promocion() {
  return (
    <PageAnimation>
           <Retiro/>

    </PageAnimation>
  );
}
