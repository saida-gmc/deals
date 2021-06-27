import React from 'react'
import deals from "../deals";
import { Link } from "react-router-dom";



const ConfirmCommand = ({match}) => {
      const deal = deals.find((deal) => deal._id == match.params.id);
console.log(deal)
    return (
        <div className=" col-sm-10 ">
        <div className="titre-block souligne margin-bottom"><strong>Détails de votre commande</strong></div>
        <div className="table-responsive">
          <table className=" table width-auto">
            <thead>
              <tr>
               
                <th>Deal</th>
                <th className="text-center">Prix unitaire</th>
                <th className="text-center">Quantité</th>
                <th className="text-center">Montant</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>						
                  <strong>
                    {deal.description}							</strong><br />
                  <i className="fa fa-map-marker" /> 
                  <span className="small">
                   {deal.location}					
                    </span>
                    </td>
                <td align="center" nowrap="nowrap" className="montant">{deal.price}&nbsp;DT</td>
                <td><form name="formQ1" id="formQ1" method="get" action="panier.php" className="text-center">
                    <select name="quantite" className="form-control width-auto quantite" onchange="document.formQ1.submit()">
                      <option value={1} selected="selected">1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                    </select>
                    <input type="hidden" name="num" defaultValue={1} placeholder="num"/>
                    <input type="hidden" name="id" defaultValue={6166} placeholder="id" />
                    <input type="hidden" name="action" defaultValue="modifier" placeholder="action" />
                  </form></td>
                <td align="center" nowrap="nowrap" className="montant">{deal.price}								DT</td>
              </tr>
              <tr className="total">
                <td className><strong>Total</strong></td>
                <td className></td>
                <td className>&nbsp;</td>
                <td align="center" nowrap="nowrap" className="montant">total DT</td>
              </tr>
            </tbody>
          </table>
        </div>
        <form action="validation-commande.php" method="get" name="form1">
         
        <div className="padding-top padding-bottom">
           <Link to="/login">
        <button type="submit" name="Submit" class="exclusive"><span>Valider ma commande</span></button>          </Link>
          <Link to="/">
        <button type="submit" name="Submit" class="exclusive"><span>Retour</span></button>                 </Link>
        </div>
        </form>
       
      </div>
    )
}

export default ConfirmCommand
