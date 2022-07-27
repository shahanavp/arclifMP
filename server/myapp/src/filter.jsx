

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>

<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>PRICE</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
        
        <div className="progress">
           <div
            className="progress-bar bg-dark"
            role="progressbar"
            style={{ width: "25%" }}
          ></div>
        </div>
        <div className="d-flex">
          <div className="dropdown">
            <button
              className="btn btn-sm dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MIN
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <h6 className="dropdown-item" href="#">
                  500
                </h6>
              </li>
              <li>
                <h6 className="dropdown-item" href="#">
                  1000
                </h6>
              </li>
              <li>
                <h6 className="dropdown-item" href="#">
                  1500
                </h6>
              </li>
              <li>
                <h6 className="dropdown-item" href="#">
                  2000
                </h6>
              </li>
              <li>
                <h6 className="dropdown-item" href="#">
                  3000
                </h6>
              </li>
              <li>
                <h6 className="dropdown-item" href="#">
                  4000
                </h6>
              </li>
              <li>
                <h6 className="dropdown-item" href="#">
                  6000
                </h6>
              </li>
            </ul>
          </div>
          
          <div className="dropdown " style={{marginLeft:"10rem"}}>
            <button
              className="btn btn-sm dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MAX
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
              <li>
                <h6 className="dropdown-item" href="#">
                  500
                </h6>
              </li>
              <li>
                <h6 className="dropdown-item" href="#">
                  1000
                </h6>
              </li>
              <li>
                <h6 className="dropdown-item" href="#">
                  1500
                </h6>
              </li>
              <li>
                <h6 className="dropdown-item" href="#">
                  2000
                </h6>
              </li>
              <li>
                <h6 className="dropdown-item" href="#">
                  3000
                </h6>
              </li>
              <li>
                <h6 className="dropdown-item" href="#">
                  4000
                </h6>
              </li>
              <li>
                <h6 className="dropdown-item" href="#">
                  6000+
                </h6>
              </li>
            </ul>
          </div>
        </div>
        </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>CUSTOMER RATING</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            4★ & above
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault1"
          />
          <label className="form-check-label" for="flexCheckDefault1">
            3★ & above
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault2"
          />
          <label className="form-check-label" for="flexCheckDefault2">
            2★ & above
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault3"
          />
          <label className="form-check-label" for="flexCheckDefault3">
            1★ & above
          </label>
        </div>             
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>COLOUR</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <div className="form-check ml-3">
               <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault4"
                />
                <label className="form-check-label" for="flexCheckDefault4">
                  BLACK
                </label>
              </div>
           
          
              <div className="form-check  ml-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault5"
                />
                <label className="form-check-label" for="flexCheckDefault5">
                  BLUE
                </label>
              </div>
            
           
              <div className="form-check  ml-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault6"
                />
                <label className="form-check-label" for="flexCheckDefault6">
                  BEIGE
                </label>
              </div>
          
              <div className="form-check  ml-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault7"
                />
                <label className="form-check-label" for="flexCheckDefault7">
                  BROWN
                </label>
              </div>
            
            
              <div className="form-check ml-3 ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault8"
                />
                <label className="form-check-label" for="flexCheckDefault8">
                  CLEAR
                </label>
              </div>
           
              <div className="form-check ml-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault9"
                />
                <label className="form-check-label" for="flexCheckDefault9">
                  CREAM
                </label>
              </div>
           
              <div className="form-check ml-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault10"
                />
                <label className="form-check-label" for="flexCheckDefault10">
                  GREEN
                </label>
              </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>OFFERS</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          
         <div className="form-check">
           <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault11"
          />
          <label className="form-check-label" for="flexCheckDefault11">
            Buy more,Save more
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault13"
          />
          <label className="form-check-label" for="flexCheckDefault13">
            No cost EMI
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault12"
          />
          <label className="form-check-label" for="flexCheckDefault12">
            Special price
          </label>
        </div>

        </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>ITEM AVAILABILITY</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
        <div className="form-check">
           <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault14"
          />
          <label className="form-check-label" for="flexCheckDefault14">
            Include out of stock
          </label>
        </div>

        </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>DISCOUNT</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
         <div className="form-check">
           <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault15"
          />
          <label className="form-check-label" for="flexCheckDefault15">
           80 % and more
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault16"
          />
          <label className="form-check-label" for="flexCheckDefault16">
            70 % and more
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault17"
          />
          <label className="form-check-label" for="flexCheckDefault17">
           60 % and more
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault17"
          />
          <label className="form-check-label" for="flexCheckDefault17">
           50 % and more
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault17"
          />
          <label className="form-check-label" for="flexCheckDefault17">
           40 % and more
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault17"
          />
          <label className="form-check-label" for="flexCheckDefault17">
           40 % and below
          </label>
        </div>
        </Typography>
        </AccordionDetails>
      </Accordion>





    </div>
  );
}














// import React from "react";
// // import ReactDOM from 'react-dom/client';
// function Filter() {
//   return (
    
//     <div className="card " style={{ width: "75rem" ,height:"50rem"}}>
//       <div className="d-flex flex-column mb-3 p-2">
//         <div className="p-2 b-4 font-weight-bold">FILTERS</div>
//         <hr className="dropdown-divider" />
//         <div className="p-2 ">PRICE</div>
//         <div className="progress">
//           <div
//             className="progress-bar bg-dark"
//             role="progressbar"
//             style={{ width: "25%" }}
//           ></div>
//         </div>
//         <div className="d-flex">
//           <div className="dropdown">
//             <button
//               className="btn btn-sm dropdown-toggle"
//               type="button"
//               id="dropdownMenuButton1"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               MIN
//             </button>
//             <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//               <li>
//                 <h6 className="dropdown-item" href="#">
//                   500
//                 </h6>
//               </li>
//               <li>
//                 <h6 className="dropdown-item" href="#">
//                   1000
//                 </h6>
//               </li>
//               <li>
//                 <h6 className="dropdown-item" href="#">
//                   1500
//                 </h6>
//               </li>
//               <li>
//                 <h6 className="dropdown-item" href="#">
//                   2000
//                 </h6>
//               </li>
//               <li>
//                 <h6 className="dropdown-item" href="#">
//                   3000
//                 </h6>
//               </li>
//               <li>
//                 <h6 className="dropdown-item" href="#">
//                   4000
//                 </h6>
//               </li>
//               <li>
//                 <h6 className="dropdown-item" href="#">
//                   6000
//                 </h6>
//               </li>
//             </ul>
//           </div>
          
//           <div className="dropdown " style={{marginLeft:"10rem"}}>
//             <button
//               className="btn btn-sm dropdown-toggle"
//               type="button"
//               id="dropdownMenuButton2"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               MAX
//             </button>
//             <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
//               <li>
//                 <h6 className="dropdown-item" href="#">
//                   500
//                 </h6>
//               </li>
//               <li>
//                 <h6 className="dropdown-item" href="#">
//                   1000
//                 </h6>
//               </li>
//               <li>
//                 <h6 className="dropdown-item" href="#">
//                   1500
//                 </h6>
//               </li>
//               <li>
//                 <h6 className="dropdown-item" href="#">
//                   2000
//                 </h6>
//               </li>
//               <li>
//                 <h6 className="dropdown-item" href="#">
//                   3000
//                 </h6>
//               </li>
//               <li>
//                 <h6 className="dropdown-item" href="#">
//                   4000
//                 </h6>
//               </li>
//               <li>
//                 <h6 className="dropdown-item" href="#">
//                   6000+
//                 </h6>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <hr className="dropdown-divider" />
//         <div className="p-2">CUSTOMER RATING</div>

//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             value=""
//             id="flexCheckDefault"
//           />
//           <label className="form-check-label" for="flexCheckDefault">
//             4★ & above
//           </label>
//         </div>

//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             value=""
//             id="flexCheckDefault1"
//           />
//           <label className="form-check-label" for="flexCheckDefault1">
//             3★ & above
//           </label>
//         </div>
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             value=""
//             id="flexCheckDefault2"
//           />
//           <label className="form-check-label" for="flexCheckDefault2">
//             2★ & above
//           </label>
//         </div>
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             value=""
//             id="flexCheckDefault3"
//           />
//           <label className="form-check-label" for="flexCheckDefault3">
//             1★ & above
//           </label>
//         </div>
//         <hr className="dropdown-divider" />

//         {/* <div className="p-2">COLOUR</div> */}
//         <div className="dropdown">
//           <button
//             className=" dropdown-toggle "
//              border="0"
//             id="dropdownMenuButton3"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//             style={{ width: "15rem" }}
//           >
//             COLOUR
//           </button>

//           <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
//             <li>
//               <div className="form-check ml-3">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   value=""
//                   id="flexCheckDefault4"
//                 />
//                 <label className="form-check-label" for="flexCheckDefault4">
//                   BLACK
//                 </label>
//               </div>
//             </li>
//             <li>
//               <div className="form-check  ml-3">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   value=""
//                   id="flexCheckDefault5"
//                 />
//                 <label className="form-check-label" for="flexCheckDefault5">
//                   BLUE
//                 </label>
//               </div>
//             </li>
//             <li>
//               <div className="form-check  ml-3">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   value=""
//                   id="flexCheckDefault6"
//                 />
//                 <label className="form-check-label" for="flexCheckDefault6">
//                   BEIGE
//                 </label>
//               </div>
//             </li>
//             <li>
//               <div className="form-check  ml-3">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   value=""
//                   id="flexCheckDefault7"
//                 />
//                 <label className="form-check-label" for="flexCheckDefault7">
//                   BROWN
//                 </label>
//               </div>
//             </li>
//             <li>
//               <div className="form-check ml-3 ">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   value=""
//                   id="flexCheckDefault8"
//                 />
//                 <label className="form-check-label" for="flexCheckDefault8">
//                   CLEAR
//                 </label>
//               </div>
//             </li>
//             <li>
//               <div className="form-check ml-3">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   value=""
//                   id="flexCheckDefault9"
//                 />
//                 <label className="form-check-label" for="flexCheckDefault9">
//                   CREAM
//                 </label>
//               </div>
//             </li>
//             <li>
//               <div className="form-check ml-3">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   value=""
//                   id="flexCheckDefault10"
//                 />
//                 <label className="form-check-label" for="flexCheckDefault10">
//                   GREEN
//                 </label>
//               </div>
//             </li>
//           </ul>
//         </div>
//         <hr className="dropdown-divider" />
//         <div className="p-2">OFFERS</div>
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             value=""
//             id="flexCheckDefault11"
//           />
//           <label className="form-check-label" for="flexCheckDefault11">
//             Buy more,Save more
//           </label>
//         </div>
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             value=""
//             id="flexCheckDefault13"
//           />
//           <label className="form-check-label" for="flexCheckDefault13">
//             No cost EMI
//           </label>
//         </div>
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             value=""
//             id="flexCheckDefault12"
//           />
//           <label className="form-check-label" for="flexCheckDefault12">
//             Special price
//           </label>
//         </div>
//         <hr className="dropdown-divider " />
//         <div className="p-2 ">ITEM AVAILABILITY</div>
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             value=""
//             id="flexCheckDefault14"
//           />
//           <label className="form-check-label" for="flexCheckDefault14">
//             Include out of stock
//           </label>
//         </div>
//         <hr className="dropdown-divider" />
//         <div className="p-2 ">DISCOUNT</div>
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             value=""
//             id="flexCheckDefault15"
//           />
//           <label className="form-check-label" for="flexCheckDefault15">
//            80 % and more
//           </label>
//         </div>
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             value=""
//             id="flexCheckDefault16"
//           />
//           <label className="form-check-label" for="flexCheckDefault16">
//             70 % and more
//           </label>
//         </div>
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             value=""
//             id="flexCheckDefault17"
//           />
//           <label className="form-check-label" for="flexCheckDefault17">
//            60 % and more
//           </label>
//         </div>
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             value=""
//             id="flexCheckDefault17"
//           />
//           <label className="form-check-label" for="flexCheckDefault17">
//            50 % and more
//           </label>
//         </div>
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             value=""
//             id="flexCheckDefault17"
//           />
//           <label className="form-check-label" for="flexCheckDefault17">
//            40 % and more
//           </label>
//         </div>
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             value=""
//             id="flexCheckDefault17"
//           />
//           <label className="form-check-label" for="flexCheckDefault17">
//            40 % and below
//           </label>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Filter;
