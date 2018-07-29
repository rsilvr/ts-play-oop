export default class ConsolePrinter {

  constructor(private readonly colorCode: string){}

  printToConsole(msg: string): void
  printToConsole(msg: number): void
  printToConsole(msg: any): void {
    let message
    if(typeof msg === 'number') {
      message = msg.toString()
    } else {
      message = <string>msg
    }
    console.log(this.colorCode, message)    
  }

}
