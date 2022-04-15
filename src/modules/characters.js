let characterArr = [
    'Rear Admiral Sir John Aubrey', 'Admiral Zhao of the Fire Nation', 'Captain Marko Alexandrovich Ramius', 'Fleet Admiral Gial Ackbar',
    'HH Admiral General Haffaz Aladeen', 'Admiral Viscount Horatio Hornblower', 'Fleet Admiral Honor Harrington', 'US Admiral Terrance Shane'
];

let randomChar = () => characterArr[Math.floor(Math.random() * characterArr.length)];

export { randomChar };