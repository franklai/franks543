<%@ LANGUAGE = JScript %>
<%
  Response.Expires=0;

  conM=Server.CreateObject("ADODB.Connection");
  conM.open("Driver={Microsoft Access Driver (*.Mdb)};Dbq="+Server.MapPath("mineRank.mdb"));
  rsM=Server.CreateObject('ADODB.Recordset');

  var getMode=''+Request.QueryString("mode");

  if (getMode=="rank"){
    var getTime=eval(''+Request.QueryString("time"));
    var getName=''+Request.QueryString("name");
    var thisDate=new Date();
    var getDate=thisDate.toLocaleString();

//�`�N�ƶ��ASQL����줣�o�Ψ�O�d�r�A�pDATE�A�r��@�w�n�[''
    var addSQL="INSERT INTO mineRank (mineName,mineTime,mineDate) VALUES ('"+getName+"',"+getTime+",'"+getDate+"')";
    conM.Execute(addSQL);
  }
%>

<HTML>
<HEAD>
<META http-equiv="Content-Type" content="text/html; charset=big5">
</HEAD>

<BODY bgcolor="silver">
�Ʀ�]<BR>
<BR>

<table border="0" cellspacing="0" cellpadding="0">
<tr>
<td width="150">�m�W</td>
<td width="40" align="right">�ɶ�</td>
</tr>

<%
  var lastTime=999;

  //var strSQL="SELECT * FROM mineRank ORDER BY mineTime ASC";
  //var strSQL="SELECT DISTINCT mineName,mineTime FROM mineRank";
  var strSQL="SELECT mineName FROM mineRank GROUP BY mineName";
  
  rsM.Open(strSQL,conM,3,3);
  
  //var counts=()?10:rsM.RecordCount;

  for (var x=0;x<rsM.RecordCount;x++){
%>

<tr>
<td><%=rsM("mineName").Value%></td>
<td><%//=rsM("mineTime").Value%></td>
</tr>

<%
      rsM.MoveNext();
  }
%>

</table>

<form name="form1">
<input name="last" type="hidden" value="<%=lastTime%>">
</form>

<%
  rsM.Close();
  conM.Close();
%>

</BODY>
</HTML>