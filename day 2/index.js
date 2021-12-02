import { console, sum, numbers } from 'supergeneric'

export const commandify = str => str.split('\n').map(r => r.split(' ').map(numbers))

export const pilot = commands => {

}
