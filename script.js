

function displayStudentList() {

  var csvData = [
    ["1,Bern,Oleszczak,Mr,boleszczak0@test.com,24/12/2000,Biology,Chemistry"],
    ["2,Daria,Innocenti,Ms,dinnocenti1@test.com,01/09/2000,History,Geography"],
    ["3,Thorstein,Cicchetto,Honorable,tcicchetto2@test.com,06/09/2002,Physics,"],
    ["4,Georgianna,Brafield,Honorable,gbrafield3@test.com,16/07/2002,Biology,Geography"],
    ["5,Bryanty,Breche,Dr,bbreche4@test.com,23/10/2001,History,"],
    ["6,Murvyn,Birchall,Rev,mbirchall5@test.com,08/11/2002,Geography,"],
    ["7,Sherline,McNysche,Honorable,smcnysche6@test.com,28/02/2000,Geography,"],
    ["8,Dukie,Neely,Honorable,dneely7@test.com,18/06/2000,Physics,Biology"],
    ["9,Mil,Udie,Honorable,mudie8@test.com,07/06/2002,History,"],
  ];

  const studentTableBody = document.getElementById('studentTableBody');

  for (let i = 0; i < csvData.length; i++) {
    const columns = csvData[i][0].split(',');
    const [id, first_name, last_name, title, email, dob, subject1, subject2] = columns;

    const row = document.createElement('tr');
    console.log(row, "HTML ROW")
    row.innerHTML = `
              <td>${id}</td>
              <td>${first_name}</td>
              <td>${last_name}</td>
              <td>${title}</td>
              <td>${email}</td>
              <td>${dob}</td>
              <td>${subject1}</td>
              <td>${subject2}</td>  
          `;

    studentTableBody.appendChild(row);
  }
}

displayStudentList();
