function getShippingMessage ( country , price , deliveryFee)
{
  const dostTow =price + deliveryFee;

  return `shipping to ${country} will cost ${dostTow} credits`;
}

if (confirm("Do you want to see the result of getElementWidth?"))
{
  alert(getShippingMessage("Germany" , 120 , 50));
}
if (confirm("Do you want to see the result of getElementWidth?"))
{
  alert(getShippingMessage("USA" , 20 , 50));
}
if (confirm("Do you want to see the result of getElementWidth?"))
{
  alert(getShippingMessage("Australia" , 200 , 50));
}

