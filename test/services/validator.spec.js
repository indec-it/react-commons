import ValidatorService from '../../src/services/validator';

describe('ValidatorService', () => {
    describe('.validateNumber', () => {
        it('should be true for a valid number', () => {
            ValidatorService.validateNumber('1').should.be.true();
            ValidatorService.validateNumber(1).should.be.true();
        });

        it('should be false for a invalid number', () => {
            ValidatorService.validateNumber('a').should.be.false();
            ValidatorService.validateNumber('$').should.be.false();
        });

        it('should be false for a string number', () => {
            ValidatorService.validateNumber('1a').should.be.false();
        });

        it('should be false for a null number', () => {
            ValidatorService.validateNumber(null).should.be.false();
        });

        it('should be false for an empty number', () => {
            ValidatorService.validateNumber('').should.be.false();
        });

        it('should be false for a NaN', () => {
            ValidatorService.validateNumber(NaN).should.be.false();
        });

        it('should be false for an undefined input', () => {
            ValidatorService.validateNumber(undefined).should.be.false();
        });
    });

    describe('.validateText', () => {
        it('should be false for a not valid string', () => {
            ValidatorService.validateText('1').should.be.false();
            ValidatorService.validateText('$').should.be.false();
            ValidatorService.validateText(1).should.be.false();
        });

        it('should be false for a null', () => {
            ValidatorService.validateText(null).should.be.false();
        });

        it('should be false for an empty', () => {
            ValidatorService.validateText('').should.be.false();
        });

        it('should be false for a NaN', () => {
            ValidatorService.validateText(NaN).should.be.false();
        });

        it('should be false for an undefined', () => {
            ValidatorService.validateText(undefined).should.be.false();
        });

        context('validate a string with default min and max length', () => {
            it('should be true for a string with less than 50 string and greater than 2', () => {
                ValidatorService.validateText('a great string valid').should.be.true();
            });

            it('should be true for a valid string with length equals to 50 or 2', () => {
                ValidatorService.validateText('a really looooooooooooooooooooooooooooooong string')
                    .should.be.true();
                ValidatorService.validateText('aa').should.be.true();
            });

            it('should be false for a not valid string with length equals to 51 or 1', () => {
                ValidatorService.validateText('a really loooooooooooooooooooooooooooooooong string')
                    .should.be.false();
                ValidatorService.validateText('a').should.be.false();
            });

            it('should be false for a string with length greater than 50', () => {
                ValidatorService.validateText('a really loooooooooooooooooooooooooooooooooooong string')
                    .should.be.false();
            });
        });

        context('validate a string with custom min and custom max values', () => {
            it('should be true for a string with length equal to min or max', () => {
                ValidatorService.validateText('a string', 23, 8).should.be.true();
                ValidatorService.validateText('a really loooong string', 23, 2).should.be.true();
            });

            it('should be false for a string with length greater than max or less than min', () => {
                ValidatorService.validateText('a string more greater than custom max', 36, 3)
                    .should.be.false();
                ValidatorService.validateText('a string more less than custom min', 55, 35)
                    .should.be.false();
            });

            it('should be true for a string with length greater than min or less than max', () => {
                ValidatorService.validateText('a string', 23, 3).should.be.true();
                ValidatorService.validateText('a really looooooooong string', 30, 2).should.be.true();
            });
        });
    });

    describe('.validateDate', () => {
        it('should be true for a valid date', () => {
            ValidatorService.validateDate('1994-04-02').should.be.true();
        });

        it('should be false for an invalid date', () => {
            ValidatorService.validateDate('14').should.be.false();
            ValidatorService.validateDate('abc').should.be.false();
            ValidatorService.validateDate('$').should.be.false();
        });

        it('should be false for a null date', () => {
            ValidatorService.validateDate(null).should.be.false();
        });

        it('should be false for an empty input', () => {
            ValidatorService.validateDate('').should.be.false();
        });

        it('should be false for a NaN', () => {
            ValidatorService.validateDate(NaN).should.be.false();
        });

        it('should be false for an undefined input', () => {
            ValidatorService.validateDate(undefined).should.be.false();
        });
    });

    describe('.validateEmail', () => {
        it('should be true for a valid email', () => {
            ValidatorService.validateEmail('fake.email@gmail.com').should.be.true();
        });

        it('should be false for a invalid email', () => {
            ValidatorService.validateEmail('an invalid mail').should.be.false();
            ValidatorService.validateEmail('123@123').should.be.false();
            ValidatorService.validateEmail('fake,email@gmail.com').should.be.false();
            ValidatorService.validateEmail('fake/email@gmail.com').should.be.false();
        });

        it('should be false for a null', () => {
            ValidatorService.validateEmail(null).should.be.false();
        });

        it('should be false for an empty', () => {
            ValidatorService.validateEmail('').should.be.false();
        });

        it('should be false for a NaN', () => {
            ValidatorService.validateEmail(NaN).should.be.false();
        });

        it('should be false for an undefined', () => {
            ValidatorService.validateEmail(undefined).should.be.false();
        });
    });

    describe('.validateDocument', () => {
        it('should be true for a valid document', () => {
            ValidatorService.validateDocument('33555777').should.be.true();
            ValidatorService.validateDocument(33555777).should.be.true();
        });

        it('should be false for a invalid document', () => {
            ValidatorService.validateDocument('document').should.be.false();
            ValidatorService.validateDocument('33%55888').should.be.false();
            ValidatorService.validateDocument('335588').should.be.false();
            ValidatorService.validateDocument('333555888').should.be.false();
        });

        it('should be false for a null input', () => {
            ValidatorService.validateDocument(null).should.be.false();
        });

        it('should be false for an empty input', () => {
            ValidatorService.validateDocument('').should.be.false();
        });

        it('should be false for a NaN', () => {
            ValidatorService.validateDocument(NaN).should.be.false();
        });

        it('should be false for an undefined input', () => {
            ValidatorService.validateDocument(undefined).should.be.false();
        });
    });

    describe('.validateCuit', () => {
        it('should be true for a valid cuil', () => {
            ValidatorService.validateCuit('20335557779').should.be.true();
        });

        it('should be false for a invalid cuil', () => {
            ValidatorService.validateCuit('a      cuil').should.be.false();
            ValidatorService.validateCuit('2033%55888').should.be.false();
            ValidatorService.validateCuit('2033558889').should.be.false();
            ValidatorService.validateCuit('203335558889').should.be.false();
        });

        it('should be false for a null cuil', () => {
            ValidatorService.validateCuit(null).should.be.false();
        });

        it('should be false for an empty input', () => {
            ValidatorService.validateCuit('').should.be.false();
        });

        it('should be false for a NaN', () => {
            ValidatorService.validateCuit(NaN).should.be.false();
        });

        it('should be false for an undefined input', () => {
            ValidatorService.validateCuit(undefined).should.be.false();
        });
    });

    describe('.validatePassword', () => {
        it('should be true for a valid password', () => {
            ValidatorService.validatePassword('Asdf1234').should.be.true();
        });

        it('should be false for a invalid cuil', () => {
            ValidatorService.validatePassword('a      password').should.be.false();
            ValidatorService.validatePassword('12345').should.be.false();
            ValidatorService.validatePassword('asd1234').should.be.false();
            ValidatorService.validatePassword('ASD1234').should.be.false();
        });

        it('should be false for a null password', () => {
            ValidatorService.validatePassword(null).should.be.false();
        });

        it('should be false for an empty input', () => {
            ValidatorService.validatePassword('').should.be.false();
        });

        it('should be false for a NaN', () => {
            ValidatorService.validatePassword(NaN).should.be.false();
        });

        it('should be false for an undefined input', () => {
            ValidatorService.validatePassword(undefined).should.be.false();
        });
    });
});
