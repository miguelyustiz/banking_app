import TotalBalanceBox from "@/components/TotalBalanceBox";
import HeaderBox from "@/components/ui/HeaderBox";
import { log } from "console";
import React from "react";

const Home = () => {
  const logIn = {
    firstName: "Miguel",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={logIn.firstName || "Guest"}
            subtext="Acces and mange your account and transactions succesfully"
          />
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.82}/>
        </header>
      </div>
    </section>
  );
};

export default Home;
