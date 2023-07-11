import "tailwindcss/tailwind.css";
import { AuthenticationHero } from "../../components/authentication/hero";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="sm:flex sm:h-screen sm:justify-between">
      <div className="sm:px-[100px] sm:flex sm:flex-col  sm:justify-center ">
        {children}
      </div>
      <div className="flex ">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center h-full"
          style={{ backgroundImage: `url(/assets/backgroundImage.jpg)` }}
        >
          <div className="absolute inset-0 backdrop-blur-sm bg-white bg-opacity-20"></div>
          <div className="relative h-full flex items-center justify-center">
            <AuthenticationHero />
          </div>
        </div>
      </div>
    </div>
  );
}
