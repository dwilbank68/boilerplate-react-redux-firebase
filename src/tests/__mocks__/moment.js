const moment = require.requireActual('moment');         // 1

export default (timestamp = 0) => {
    return moment(timestamp)
}

// this is to make 'moment' return a consistent 'current' time
// of zero and avoid messing up snapshot tests.
// When, however, a timestamp is provided, the real moment
// provides a real moment time object

// 1 -  requireActual is necessary, otherwise, 'require' will pick
//      up this mocked version of 'moment' instead of the real one