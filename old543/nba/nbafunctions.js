function reSet(){
playerNo=0;
ourPlayers=new Array();
  for (var i=0;i<NBAplayers.length;i++){
    if (NBAplayers[i][8]==ourTeam){
      ourPlayers[playerNo]=NBAplayers[i];
      playerNo++;
    }
  }
  for (var i=0;i<NBAteams.length;i++){
    if (NBAteams[i][1]==ourTeam){
      ourTeams=NBAteams[i];
    }
  }
}

//

function changeHeight(changeArray,changeField,newField){
  for (var y=0;y<changeArray.length;y++){
    var Height01=''+changeArray[y][changeField];
        Height01=Height01.substring(0,1);
    var Height12=''+changeArray[y][changeField];
        Height12=Height12.substring(1,2);
    var Height23=''+changeArray[y][changeField];
        Height23=Height23.substring(2,3);
      if (Height12==0){
        changeArray[y][newField]=Height01+'-'+Height23;
      }
      else{
        changeArray[y][newField]=Height01+'-'+Height12+Height23;
      }
  }
}

//

function buildForm(teams,search){

ourForm='<FORM NAME="form1">';

 if (teams){
  ourForm+='��ܲy���G<SELECT NAME="select1" onChange="changeTeam(document.form1.select1.selectedIndex);">';
  ourForm+='<OPTION>�п�ܶ���</OPTION>';
    for (var i=0;i<NBAteams.length;i++){
      ourForm+='<OPTION>'+NBAteams[i][4]+' '+NBAteams[i][5]+'</OPTION>';
    }
  ourForm+='</SELECT>';
 }

 if (search){
  ourForm+='<BR>�涵��Ƭd�ߡG';
  ourForm+='<SELECT NAME="select2">';
  ourForm+='<OPTION>���X</OPTION>';
  ourForm+='<OPTION>�W�r</OPTION>';
  ourForm+='<OPTION>�m��</OPTION>';
  ourForm+='<OPTION>��m</OPTION>';
  ourForm+='<OPTION>����</OPTION>';
  ourForm+='<OPTION>�魫</OPTION>';
  ourForm+='<OPTION>�Ǯ�</OPTION>';
  ourForm+='</SELECT>';
  ourForm+='<INPUT NAME="text1" TYPE="TEXT" VALUE="" SIZE="20">';
  ourForm+='<INPUT NAME="button1" TYPE="BUTTON" VALUE="�d��" onClick="findData(document.form1.select2.selectedIndex,document.form1.text1.value);">';
 }

ourForm+='</FORM>';
ourForm+='';
}

//

function buildTable(){
ourTable='<table width="100%" border="0" cellpadding="2" cellspacing="3" align="center">\n';
ourTable+='<tr bgcolor='+titleColor+'>\n';
ourTable+='<td width="8%"><A HREF="javascript:Data(1)">���X</A></td>\n';
ourTable+='<td width="14%"><A HREF="javascript:Data(2)">�W�r</A></td>\n';
ourTable+='<td width="16%"><A HREF="javascript:Data(3)">�m��</A></td>\n';
ourTable+='<td width="8%"><A HREF="javascript:Data(4)">��m</A></td>\n';
ourTable+='<td width="8%"><A HREF="javascript:Data(5)">����</A></td>\n';
ourTable+='<td width="8%"><A HREF="javascript:Data(6)">�魫</A></td>\n';
ourTable+='<td width="38%"><A HREF="javascript:Data(7)">�Ǯ�</A></td></tr>\n';
  for (var x=0;x<ourPlayers.length;x++){
   playerColor=(x%2)?playerColor2:playerColor1;
   ourTable+='<tr bgcolor='+playerColor+'>'+
   '<td>'+ourPlayers[x][1]+'</td>'+
   '<td>'+ourPlayers[x][2]+'</td>'+
   '<td>'+ourPlayers[x][3]+'</td>'+
   '<td>'+ourPlayers[x][4]+'</td>'+
   '<td>'+ourPlayers[x][9]+'</td>'+
   '<td>'+ourPlayers[x][6]+'</td>'+
   '<td>'+ourPlayers[x][7]+'</td></tr>';
  }
ourTable+='</table>';
ourTable+='<P>�нm�G'+ourTeams[2]+'</P><P>�D���G'+ourTeams[3]+'</P>';
}

//

function Show(divName1,layerName1,divName2,layerName2,firstTime){
  if (document.all){
    if (firstTime) {document.all(divName1).innerHTML=ourForm;}
    document.all(divName2).innerHTML=ourTable;
  }
  else {
    if (firstTime) {
      document.layers[layerName1].document.open();
      document.layers[layerName1].document.write(ourForm);
      document.layers[layerName1].document.close();
    }
    document.layers[layerName2].document.open();
    document.layers[layerName2].document.write(ourTable);
    document.layers[layerName2].document.close();
  }
}

//

function bubbleSort(sortArray){
var k=sortArray.length-1;
  while (k>=0){
    var i,j;
    for (i=1,j=-1;i<=k;i++){
      if (sortArray[i-1][1]>sortArray[i][1]){
        j=i-1;
        var temp=sortArray[i];
        sortArray[i]=sortArray[i-1];
        sortArray[i-1]=temp;
      }
    }
    k=j;
  }

}

//

function Data(NO){
  if (ourData[NO]){
    ourPlayers.reverse();
  }
  else if (NO==1){
    bubbleSort(ourPlayers);
    markData(NO);
  }
  else {
    for (var k=0;k<ourPlayers.length;k++){
      ourPlayers[k][0]=ourPlayers[k][NO];
    }
    
     if (NO==5||NO==6){
      ourPlayers.sort();
      ourPlayers.reverse();
      markData(NO);
     }
     else {
      ourPlayers.sort();
      markData(NO);
     } 
  }

  buildTable();
  Show('playersForm','playersForm','playersTable','playersTable',false);
}

//

function markData(NO){
  for (var i=1;i<ourData.length;i++){
    ourData[i]=false;
    ourData[NO]=true;
  }
}

//

function changeTeam(NO){
 if (NO!=0){
  ourTeam=NBAteams[NO-1][1];
  reSet();
  changeHeight(ourPlayers,5,9);
  buildForm(true,false);
  buildTable();
  Show('playersForm','playersForm','playersTable','playersTable',false);
 }
}

//

function findData(NO,findString){
playerNo=0;
ourPlayers=new Array();
  for (var i=0;i<NBAplayers.length;i++){
    if (NBAplayers[i][NO+1]==findString){
      ourPlayers[playerNo]=NBAplayers[i];
      playerNo++;
    }
  }
  
  if (playerNo==0){
    noFound();
  }
  else{
    changeHeight(ourPlayers,5,9);
    buildForm(true,false);
    buildFindTable();
    Show('playersForm','playersForm','playersTable','playersTable',false);
  }
}

//

function buildFindTable(){
ourTable='<table width="100%" border="0" cellpadding="2" cellspacing="3" align="center">\n';
ourTable+='<tr bgcolor='+titleColor+'>\n';
ourTable+='<td width="8%"><A HREF="javascript:fData(1)">���X</A></td>\n';
ourTable+='<td width="14%"><A HREF="javascript:fData(2)">�W�r</A></td>\n';
ourTable+='<td width="16%"><A HREF="javascript:fData(3)">�m��</A></td>\n';
ourTable+='<td width="8%"><A HREF="javascript:fData(4)">��m</A></td>\n';
ourTable+='<td width="8%"><A HREF="javascript:fData(5)">����</A></td>\n';
ourTable+='<td width="8%"><A HREF="javascript:fData(6)">�魫</A></td>\n';
ourTable+='<td width="30%"><A HREF="javascript:fData(7)">�Ǯ�</A></td>\n';
ourTable+='<td width="8%"><A HREF="javascript:fData(8)">����</A></td></tr>\n';
  for (var x=0;x<ourPlayers.length;x++){
   playerColor=(x%2)?playerColor2:playerColor1;
   ourTable+='<tr bgcolor='+playerColor+'>'+
   '<td>'+ourPlayers[x][1]+'</td>'+
   '<td>'+ourPlayers[x][2]+'</td>'+
   '<td>'+ourPlayers[x][3]+'</td>'+
   '<td>'+ourPlayers[x][4]+'</td>'+
   '<td>'+ourPlayers[x][9]+'</td>'+
   '<td>'+ourPlayers[x][6]+'</td>'+
   '<td>'+ourPlayers[x][7]+'</td>'+
   '<td>'+ourPlayers[x][8]+'</td></tr>';
  }
ourTable+='</table>';
}

function noFound(){
ourTable='�d�ߤ���z�n����ơI';
Show('playersForm','playersForm','playersTable','playersTable',false);
}

//

function fData(NO){
  if (ourData[NO]){
    ourPlayers.reverse();
  }
  else if (NO==1){
    bubbleSort(ourPlayers);
    markData(NO);
  }
  else {
    for (var k=0;k<ourPlayers.length;k++){
      ourPlayers[k][0]=ourPlayers[k][NO];
    }
    
     if (NO==5||NO==6){
      ourPlayers.sort();
      ourPlayers.reverse();
      markData(NO);
     }
     else {
      ourPlayers.sort();
      markData(NO);
     } 
  }
  buildFindTable();
  Show('playersForm','playersForm','playersTable','playersTable',false);
}