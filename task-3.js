function getElementWidth(content , padding , border)
{
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);

  const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

  return totalWidth;
}
if (confirm("Do you want to see the result of getElementWidth?"))
{
  alert(getElementWidth("50px", "8px", "4px")); 
}
if (confirm("Do you want to see the result of getElementWidth?"))
{
  alert(getElementWidth("60px", "12px", "8.5px")); 
}
if (confirm("Do you want to see the result of getElementWidth?"))
{
  alert(getElementWidth("200px", "0px", "0px")); 
}
