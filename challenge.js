const poll = {
  question: 'What is your favorite programming language?',
  option: ['0: JavaScript', '1: Python', '2: C#', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question} \n ${this.option.join(
          '\n  ',
        )} \n Choose your favorite language:`,
      ),
    )
    // console.log(answer);
    typeof answer === 'number' &&
      answer < this.option.length &&
      this.answers[answer]++
    //    console.log(this.answers);
    this.displayResult()
    this.displayResult('string')
  },
  displayResult(type = 'array') {
    if (type === 'array') {
      console.log(this.answers)
    } else if (type === 'string') {
      console.log(`Your Answer is: ${this.answers.join(', ')}`)
    }
  },
}

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll))

poll.displayResult.call({ answers: [1, 3, 2, 0] }, 'string')
