const CharNumbers = 36;

export const CorrectLenString = 10;
export const EmailString = '@mail.ru';

const generateString = (len) : string => {
    return [ ...Array(len) ].map(() => (~~(Math.random() * CharNumbers)).toString(CharNumbers)).join('');
};

export default generateString;
