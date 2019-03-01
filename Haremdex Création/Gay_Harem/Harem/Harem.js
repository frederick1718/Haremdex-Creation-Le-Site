function viewImage5(id, idImage, Name, ava, spe, rar) { 
                document.getElementById(id).innerHTML=`
        <h1 class="info" style="margin-top: 2px; margin-right: 10px;">
        <div>
        <p class="name${rar}"><!a href="Filles/${Name}.html" style="color: white;">${Name}<!/a> <img class="iconom" src="../../Autres/carac/${spe}.png"></p>
        <img class="ava" src='https://hh.hh-content.com/pictures/girls/${idImage}/ava${ava}.png'>
        </div>
        <div class="stars${spe}">
        <button class="stars" id="bouton" onclick="javascript:viewImage5('image', '${idImage}', '${Name}', '0', '${spe}', '${rar}');"><p class="tstars">0</p></button>
        <button class="stars" id="bouton" onclick="javascript:viewImage5('image', '${idImage}', '${Name}', '1', '${spe}', '${rar}');"><p class="tstars">1</p></button>
        <button class="stars" id="bouton" onclick="javascript:viewImage5('image', '${idImage}', '${Name}', '2', '${spe}', '${rar}');"><p class="tstars">2</p></button>
        <button class="stars" id="bouton" onclick="javascript:viewImage5('image', '${idImage}', '${Name}', '3', '${spe}', '${rar}');"><p class="tstars">3</p></button>
        <button class="stars" id="bouton" onclick="javascript:viewImage5('image', '${idImage}', '${Name}', '4', '${spe}', '${rar}');"><p class="tstars">4</p></button>
        <button class="stars" id="bouton" onclick="javascript:viewImage5('image', '${idImage}', '${Name}', '5', '${spe}', '${rar}');"><p class="tstars">5</p></button>
        </div>
        </h1>`;
        }

function viewImage3(id, idImage, Name, ava, spe, rar) { 
                document.getElementById(id).innerHTML=`
        <h1 class="info" style="margin-top: 2px; margin-right: 10px;">
        <div>
        <p class="name${rar}"><!a href="Filles/${Name}.html" style="color: white;">${Name}<!/a> <img class="iconom" src="../../Autres/carac/${spe}.png"></p>
        <img class="ava" src='https://hh.hh-content.com/pictures/girls/${idImage}/ava${ava}.png'>
        </div>
        <div class="stars${spe}">
        <button class="stars" id="bouton"></button>
        <button class="stars" id="bouton" onclick="javascript:viewImage3('image', '${idImage}', '${Name}', '0', '${spe}', '${rar}');"><p class="tstars">0</p></button>
        <button class="stars" id="bouton" onclick="javascript:viewImage3('image', '${idImage}', '${Name}', '1', '${spe}', '${rar}');"><p class="tstars">1</p></button>
        <button class="stars" id="bouton" onclick="javascript:viewImage3('image', '${idImage}', '${Name}', '2', '${spe}', '${rar}');"><p class="tstars">2</p></button>
        <button class="stars" id="bouton" onclick="javascript:viewImage3('image', '${idImage}', '${Name}', '3', '${spe}', '${rar}');"><p class="tstars">3</p></button>
        <button class="stars" id="bouton"></button>
        </div>
        </h1>`;
        }

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