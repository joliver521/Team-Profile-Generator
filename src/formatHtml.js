const path = require('path');
const fs = require('fs');

const templatesDir = path.resolve(__dirname, '../dist');

const create = employees => {
    const html = [];

    html.push(
        employees
            .filter(employee => employee.getRole() === 'Manager')
            .map(manager => createManager(manager))
    );
    html.push(
        employees
            .filter(employee => employee.getRole() === 'Engineer')
            .map(engineer => createEngineer(engineer))
    );
    html.push(
        employees
            .filter(employee => employee.getRole() === 'Intern')
            .map(intern => createIntern(intern))
    );

    return createIndex(html.join(''));
};

const createManager = manager => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, 'manager.html'),
        'utf8'
    );
    template = createTeam(template, 'name', manager.getName());
    template = createTeam(template, 'role', manager.getRole());
    template = createTeam(template, 'email', manager.getEmail());
    template = createTeam(template, 'id', manager.getId());
    template = createTeam(template, 'officeNumber', manager.getOfficeNumber());
    return template;
};

const createEngineer = engineer => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, 'engineer.html'),
        'utf8'
    );
    template = createTeam(template, 'name', engineer.getName());
    template = createTeam(template, 'role', engineer.getRole());
    template = createTeam(template, 'email', engineer.getEmail());
    template = createTeam(template, 'id', engineer.getId());
    template = createTeam(template, 'github', engineer.getGithub());
    return template;
};

const createIntern = intern => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, 'intern.html'),
        'utf8'
    );
    template = createTeam(template, 'name', intern.getName());
    template = createTeam(template, 'role', intern.getRole());
    template = createTeam(template, 'email', intern.getEmail());
    template = createTeam(template, 'id', intern.getId());
    template = createTeam(template, 'school', intern.getSchool());
    return template;
};

const createIndex = html => {
    const template = fs.readFileSync(
        path.resolve(templatesDir, 'index.html'),
        'utf8'
    );
    return createTeam(template, 'team', html);
};

const createTeam = (template, placeholder, value) => {
    const pattern = new RegExp('{{ ' + placeholder + ' }}', 'gm');
    return template.replace(pattern, value);
};

module.exports = create;
