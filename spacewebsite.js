const missionStatements = [
  'Protecting space-based assets',
  'Protecting terrestrial infrastructure',
  'Promoting scientific discovery'
];

const missionStatementElement = document.getElementById('mission-statement');
const randomIndex = Math.floor(Math.random() * missionStatements.length);
const randomMissionStatement = missionStatements[randomIndex];
missionStatementElement.textContent = randomMissionStatement;

// Simulate typing effect on mission statement
let i = 0;
function typeMissionStatement() {
  const missionStatement = missionStatementElement.textContent;
  if (i < missionStatement.length) {
    missionStatementElement.textContent = missionStatement.substring(0, i+1);
    i++;
    setTimeout(typeMissionStatement, 50);
  }
}
setInterval(typeMissionStatement, 3000);
