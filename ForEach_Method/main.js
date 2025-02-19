const workers = [
    {
        name: 'Ali',
        age: 25,
        occupation: 'Software Engineer',
        salary: 50000
    },
    {
        name: 'Sophia',
        age: 32,
        occupation: 'Data Scientist',
        salary: 75000
    },
    {
        name: 'Ghada',
        age: 28,
        occupation: 'Web Developer',
        salary: 60000
    },
    {
        name: 'Karim',
        age: 24,
        occupation: 'UX Designer',
        salary: 55000
    },
    {
        name: 'Yasser',
        age: 35,
        occupation: 'Project Manager',
        salary: 80000
    },
    {
        name: 'Isabella',
        age: 29,
        occupation: 'Marketing Specialist',
        salary: 65000
    },
    {
        name: 'Tarik',
        age: 27,
        occupation: 'Network Engineer',
        salary: 70000
    },
    {
        name: 'Ahmed',
        age: 31,
        occupation: 'Financial Analyst',
        salary: 90000
    },
    {
        name: 'Aya',
        age: 26,
        occupation: 'Sales Representative',
        salary: 45000
    },
    {
        name: 'Alaa',
        age: 30,
        occupation: 'Human Resources Manager',
        salary: 75000
    }
];

let total = 0

workers.forEach((worker) => {
    total += worker.salary
})

const avgSalary = total / workers.length

console.log(`The average salary of ${workers.length} workers is ${avgSalary}.`)