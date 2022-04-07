const generate_string = (len) : string => {
    return [ ...Array(len) ].map(() => (~~(Math.random() * 36)).toString(36)).join('');
};

export default generate_string;
