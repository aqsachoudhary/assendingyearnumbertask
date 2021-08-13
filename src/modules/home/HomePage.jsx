import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import "../../styles/HomePage.css";
import CardsComponent from "../../components/CardsComponent";
import { releaseData } from "../../helper/Data";

const HomePage = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [cardsList, setCardsList] = useState([]);
  // array of objs -> sort by number(year) , by alphabet(title)
  const HandleMenu = () => {
    setOpenMenu(true);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };
  useEffect(async() => {
    const data =await releaseData();
    setCardsList(data.releases);
    console.log(`data`, data)

  }, []);
  
  const sortbyyear = ()=>{
    const data=cardsList.sort((a,b)=>{return(a.year-b.year)
      setCardsList()
    })
  } 
  const sortbytitle = ()=>{
    const data=cardsList.sort((a,b)=>{
      if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
  if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
  return 0;

      setCardsList()
    })
  } 


  return ( 
    <>
      <div className="homepage">
        <div className="headers">
          <h2 className="title">Release From R$S Records</h2>
          <>
            <Button
              style={{ display: "flex", border: "1px solid black" }}
              onClick={() => {
                HandleMenu();
              }}
            >
              sort by Year A-z
            </Button>
            <Menu
              open={openMenu}
              onClose={closeMenu}
              style={{ position: "fixed", left: "83.7%", bottom:"1%" }}
            >
              <Button
                onClick={() => {
                  closeMenu();
                  sortbyyear();
                }}
              >
                Sort by Year
              </Button>
              <Button
                onClick={() => {
                  closeMenu();
                  sortbytitle();
                }}
              >
                Sort by Alphabets
              </Button>
            </Menu>
          </>
        </div>
        <div className="map">
          {cardsList?.map((c) => (
            <CardsComponent
              // resource_url={c.resource_url}
              title={c.title}
              year={c.year}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default HomePage;
