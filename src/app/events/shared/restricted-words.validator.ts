import { FormControl } from "@angular/forms"

  export function restrictedWords(words) {
    return  (control: FormControl):{[key: string]: any } =>
    {
      if(!words) return null as any

      var invalidWords = words.map(w=> control.value.includes(w) ? w:null).filter(w=>w != null)

      console.log(invalidWords)
      return invalidWords &&  invalidWords.lenthh > 0 
      ?
      {'restrictedWords': invalidWords.join(', ')}: null as any
  }
}