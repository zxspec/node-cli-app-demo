var program = require('commander');
const { prompt } = require('inquirer');

const questions = require('./questions')

const launchGlass = val => console.info('launchGlass ', val)

program
  .version('1.1.0')
  .option('-q, --quick <quick>', 'provide your options: ',)
  .option('-i, --interactive [interactive]', 'follow instructions', true)
  .parse(process.argv);

if (program.quick) {
  console.info('### quick mode, you selected: ', program.quick)
} else {
  console.info('### interactive mode')
  prompt(questions).then(answers => launchGlass(answers));
}
