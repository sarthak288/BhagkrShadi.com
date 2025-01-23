function generateEscapePlan(){
    const vehicle=document.getElementById('vehicle').Value;
    const budget=document.getElementById('budget').Value;

    const escapePlan='Your escape plan: Use a ${vehicle} with a ${budget} budget.Good luck running away!';
    document.getElementById('escape-result').innerText=escapePlan;
}
function runCompatibilityTest(){
  const compatibilityScore=Math.floor(Math.random()*101);
  const resultMessage=
    compatibilityScore>70
      ? 'Your compatibility is ${compatibilityScore}%. Perfect match for running away!'
      : 'Your compatibility is ${compatibilityScore}%. Maybe rethink your plan?';

  document.getElementById('compatibility-result').innerText=resultMessage;
  
}