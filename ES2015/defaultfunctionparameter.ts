let getValue = (value=10, bonus = value*.1) => console.log(value + bonus);

getValue();
getValue(20);
getValue(20, 30);
getValue(undefined, 30);