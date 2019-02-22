function viewImageIco(rare1, aff, idIco, nom, special, rare) { 
                document.getElementById(id).innerHTML=`
                <button id="bouton" class="ico${rare1}" onclick="javascript:viewImage${aff}('image', '${idIco}', '${nom}', '0', '${special}', '${rare}');" />
                        <div class="ico_div">
                                <img class="ico" src="Filles/${idIco}/ico0.png">
                                <div class="spe_div">
                                        <img class="spe" src="../../Autres/carac/${special}.png">
                                </div> 
                        </div>
                </button>
        `;
        }