import React from "react";
import '../grid-produto/produto.css';


import {
    Container, Button, Row, Col,
} from 'reactstrap'


export const Produto = (props) =>  {
    console.log(props);

        return (
                                
      <Container className="telaProduto  ">          
                                         {/*parte inicio produto e descrição*/} 
            <form id="produto" className="row ">   
                        <div className="card col-md-7">
                            <Row  className=" card-compra" >  
                                     <div  className="img">
                                        <img src="https://images-americanas.b2w.io/produtos/01/00/oferta/134253/9/134253978G1.jpg" alt="" />
                                     </div>     

                                     <div className="card-body">
                                   
                                            <h1>{props.match.params.produto}</h1>
                                            <p>This is a wider card with supporting text below
                                            as a natural lead-in to
                                            additional content. This content is a little bit longer.
                                            </p>
                                     </div>    
                            </Row>
                         </div>    
                                  {/*parte final produto e descrição*/} 


                                   <div id="teste" className=""></div> {/*" col-md-1" em classname para ocupar uma colna */}

                                    
                                        {/*parte de compra*/} 
                              
                         <div id="compra" className="card col-md-4">  
                                 
                                           <br/><br/>
                                   <div className="price-container">
                                        <h3 className="price">R$ 123,20</h3>
                                        <span>preço por litro</span>
                                   </div> 
                                     
                               

                                  <br/><br/>
                                  <hr/>     
                                  <br/><br/>
                                              
                               <div className="container">
                                    <label htmlFor="frete"><h4>Calcular Frete</h4></label>                         
                                    <br/>
                                    <input className="frete" type="text" id="titular" name="frete" placeholder="" />
                                    <Button id="btnok" color="primary">OK</Button>{' '}
                               </div>
                                        
                                    <br/><br/>
                                      <hr/>
                                    <br/>

                               <div id="botao " />                       
                                     <Button id="botao" color="success">Comprar</Button>{' '}
                                </div>     
                              
                           
                                           {/*parte final da compra*/}    
             </form>
       </Container>         
        )
}


export default Produto