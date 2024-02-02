export const formatType = (type: string): string => {
    let color: string;

    switch (type) {
        case 'Fire':  color = 'red lighten-1';   break;
        case 'Water':     color = 'blue lighten-1';      break;
        case 'Plant':     color = 'green lighten-1';      break;
        case 'Insecte':
            color = 'brown lighten-1';
            break;
        case 'Normal':
            color = 'grey lighten-3';
            break;
        case 'Vol':
            color = 'blue lighten-3';
            break;
        case 'Poison':
            color = 'deep-purple accent-1';
            break;
        case 'Fairy':
            color = 'pink lighten-4';
            break;
        case 'Psy':
            color = 'deep-purple darken-2';
            break;
        case 'Electrik':
            color = 'lime accent-1';
            break;
        case 'Combat':
            color = 'deep-orange';
            break;
        default:
            color = 'grey';
            break;
    }

    return `chip ${color}`;
}

export const formatDate = (date: Date = new Date()): string => {
    return `${date.getDate()}/${date.getMonth()+1} /${date.getFullYear()}`
}