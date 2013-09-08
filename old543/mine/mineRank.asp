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

//注意事項，SQL的欄位不得用到保留字，如DATE，字串一定要加''
    var addSQL="INSERT INTO mineRank (mineName,mineTime,mineDate) VALUES ('"+getName+"',"+getTime+",'"+getDate+"')";
    conM.Execute(addSQL);
  }
%>

<HTML>
<HEAD>
<META http-equiv="Content-Type" content="text/html; charset=big5">
</HEAD>

<BODY bgcolor="silver">
排行榜<BR>
<BR>

<table border="0" cellspacing="0" cellpadding="0">
<tr>
<td width="130">姓名</td>
<td width="40" align="right">時間</td>
</tr>

<%
  var lastTime=999;

  var strSQL="SELECT * FROM mineRank ORDER BY mineTime ASC";
  rsM.Open(strSQL,conM,3,3);
  
  var counts=(rsM.RecordCount>100)?100:rsM.RecordCount;

  for (var x=0;x<counts;x++){
%>
<tr>
<td><%=rsM("mineName").Value%></td>
<td align="right"><%=rsM("mineTime").Value%></td>
</tr>
<%
    if (x<counts-1){
      rsM.MoveNext();
    }
    else {
      //除非已有百位上排行榜，否則底限仍為999
      if (x==999) lastTime=rsM("mineTime").Value;
    }
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