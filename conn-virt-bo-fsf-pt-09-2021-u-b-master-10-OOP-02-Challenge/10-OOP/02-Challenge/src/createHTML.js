const generateManager = manager => {
    return `
    <div class="card shadow mb-5 bg-body rounded" style="width: 18rem;">
                <div class="card-body">
                    <h4 class="card-title rounded-top">Manager  <i class="fas fa-user-tie fa-1x"></i></h4>
                    <h5>${manager.name}</h5>
                    <p><span>ID:</span> ${manager.empID}</p>
                    <p> <span>Email:</span> <br> <a href="mailto:${manager.email}"> ${manager.email}</a></p>
                    <p type="tel"> <span>Office Number:</span> <br> ${manager.officePhone}</p>
                </div>
            </div>
    `;
}

const generateEngineer = engineer => {
    return `
    <div class="card shadow mb-5 bg-body rounded" style="width: 18rem;">
                <div class="card-body">
                    <h4 class="card-title rounded-top">Engineer  <i class="fas fa-cogs fa-1x"></i></h4>
                    <h5>${engineer.name}</h5>
                    <p><span>ID:</span> ${engineer.empID}</p>
                    <p> <span>Email:</span> <br> <a href="mailto:${engineer.email}"> ${engineer.email}</a></p>
                    <p> <span>Github:</span> <br> <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
                </div>
            </div>
    `;
}

const generateIntern = intern => {
    return `
    <div class="card shadow mb-5 bg-body rounded" style="width: 18rem;">
                <div class="card-body">
                    <h4 class="card-title rounded-top">Intern  <i class="fas fa-graduation-cap fa-1x"></i></h4>
                    <h5>${intern.name}</h5>
                    <p><span>ID:</span> ${intern.empID}</p>
                    <p> <span>Email:</span> <br> <a href="mailto:${intern.email}"> ${intern.email}</a></p>
                    <p> <span>School:</span> <br> ${intern.school}</p>
                </div>
            </div>
    `;
}



const createHTML = data =>{
    let cardArr = []

    for (let i = 0; i < data.length; i++){
        const employee = data[i];
        const role = employee.getRole(); 

        // calls the manager function
        if (role === 'Manager') {
            const mgrCard = generateManager(employee);

            cardArr.push(mgrCard);
            
        }
        if (role === 'Engineer') {
            const engCard = generateEngineer(employee);

            cardArr.push(engCard);
        }
        if (role === 'Intern') {
            const intCard = generateIntern(employee);

            cardArr.push(intCard);
        }
    }

    const teamCards = cardArr.join('')
    const cardElements = createPage(teamCards);
        return cardElements;
}

const createPage = teamCards => {
    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
        crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" 
        integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href = "./style.css"/>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Dev Team List</title>
        </head>
        <body>
        <body>
            <div id="header" class="row container-fluid">
                <h1>Dev Team</h1>
            </div>
            <div id="card-holder" class="container d-flex flex-wrap justify-content-evenly">
                ${teamCards}
            </div>
        </body>
        </html>
    `
}

module.exports = createHTML;