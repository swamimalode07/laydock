import GradientBlobHeader from "@/components/GradientBlobHeader";
import Navbar from "./_components/navbar";
const RootLayout = ({children}:{children:React.ReactNode}) => {
    return ( 
        <GradientBlobHeader>
        <div className="h-full ">
            <Navbar/>
            <main>{children}</main>
        </div>
              </GradientBlobHeader>
     );
}
 
export default RootLayout;