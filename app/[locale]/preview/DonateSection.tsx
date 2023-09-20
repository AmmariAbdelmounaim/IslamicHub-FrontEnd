import Head from "next/head";
import FillButton from "../../../components/button/FillButton";

const DonatePage = () => {
  return (
    <div className="py-[64px]  border-b-[2px] border-b-secondary-brown-light-active">
      <div className="container mx-auto px-4">
        <Head>
          <title>Donate Now</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="flex flex-col mt-8">
            <h2
              className="font-medium font-poppins text-[24px] mb-4"
              style={{ marginLeft: "100px" }}
            >
              Donate Now
            </h2>
            <div className="w-1030px h-53px flex justify-between items-start self-stretch p-8 1px gap-10">
              <button
                className="flex items-center font-poppins w-110 h-37 text-primary-orange-darker hover:bg-primary-orange-normal  rounded-full border-2 border-primary-orange-normal"
                style={{ borderRadius: "30px", padding: "12px 40px" }}
              >
                10$
              </button>
              <button
                className="flex items-center  font-poppins w-110 h-37 text-primary-orange-darker hover:bg-primary-orange-normal rounded-full border-2 border-primary-orange-normal"
                style={{ borderRadius: "30px", padding: "12px 40px" }}
              >
                25$
              </button>
              <button
                className="flex items-center font-poppins w-110 h-37 text-primary-orange-darker hover:bg-primary-orange-normal  rounded-full border-2 border-primary-orange-normal"
                style={{ borderRadius: "30px", padding: "12px 40px" }}
              >
                50$
              </button>
              <button
                className="flex items-center font-poppins w-110 h-37 text-primary-orange-darker hover:bg-primary-orange-normal  rounded-full border-2 border-primary-orange-normal"
                style={{ borderRadius: "30px", padding: "12px 40px" }}
              >
                75$
              </button>
              <button
                className="flex items-center font-poppins w-110 h-37 text-primary-orange-darker hover:bg-primary-orange-normal  rounded-full border-2 border-primary-orange-normal"
                style={{ borderRadius: "30px", padding: "12px 40px" }}
              >
                100$
              </button>
            </div>

            <h3
              className="font-medium font-poppins text-[20px] mt-8 mb-2"
              style={{
                color: "var(--secondary-brown-dark, #735B3C)",
                textAlign: "center",
              }}
            >
              Other Amount
            </h3>
            <div className="flex gap-[40px] justify-center">
              <div>
                <input
                  type="text"
                  id="donationReason"
                  placeholder="the islamic center name"
                  className="w-full h-10 px-4 font-poppins rounded-lg border-2 border-gray-300 focus:outline-none focus:border-primary-orange-normal"
                  style={{
                    display: "flex",
                    padding: "14px 128px 14px 13px",
                    alignItems: "flex-start",
                    gap: "10px",
                    flex: "1 0 0",
                    borderRadius: "10px",
                    border: "2px solid var(--secondary-brown-normal, #997950)",
                    boxShadow: "1px 4px 16px 0px rgba(122, 105, 100, 0.05)",
                  }}
                />
              </div>
            </div>
            <div className="flex justify-center mt-10">
              {" "}
              {/* Ajout de la classe mt-32 pour l'espace de 32px */}
              <FillButton>Donate Now</FillButton>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DonatePage;
