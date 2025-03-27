import CustomToaster from "@/components/shared/CustomToaster";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";


function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section>{children}</section>
      <Footer />
      <CustomToaster />
    </main>
  );
}

export default layout;
