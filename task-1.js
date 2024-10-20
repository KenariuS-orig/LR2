function makeTransaction ( quantiti , pricePerDroid)
{
  const  fullPrice = quantiti * pricePerDroid;

  return `Your order ${quantiti} droids worth ${fullPrice} credit!`;
}

if (confirm("Do you want to see the result of getElementWidth?"))
{
  alert(makeTransaction(5 , 3000));
}
if (confirm("Do you want to see the result of getElementWidth?"))
{
  alert(makeTransaction(3 , 1000));
}
if (confirm("Do you want to see the result of getElementWidth?"))
{
  alert(makeTransaction(10 , 500));
}
