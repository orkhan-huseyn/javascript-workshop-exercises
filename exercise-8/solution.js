function isLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0) {
        return true;
    }

    if (year % 400 == 0 && year % 100 == 0) {
        return true;
    }

    return false;
}

isLeapYear(2017);
isLeapYear(2022);
isLeapYear(2020);
isLeapYear(1996);
