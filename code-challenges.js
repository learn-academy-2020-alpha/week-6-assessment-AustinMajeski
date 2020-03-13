// ASSESSMENT 6: Coding Practical Questions


/**********************/
/*   Austin Majeski   */
/**********************/




    // -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*-


    //               Custom Logging To Console


    // -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*-


class CustomLog{

    static _init_SET_UP = CustomLog._init_SET_UP_Function()

    static _init_SET_UP_Function() {

        // ============= ============= ============= ============= ============= ============= =============

        //  #  Giving the ' call_custom_log ' method to the Array type

        Array.prototype.get_custom_log_format = function() {
            let stopping_index = this.length - 1
            let output = "[ "
            this.forEach( (v,i)  =>  i < stopping_index ? output += `${v}, ` : output += v )
            return( output + " ]" )
        }

        //  #  Giving the ' emphasize ' method to Strings

        String.prototype.emphasize = function(  spacing = 0, color = CustomLog.Use.GREEN_TEXT  ) {
            let local_space = (  spacing > 0 ? " ".repeat(spacing) : ""  )
            return( `${CustomLog.Use.BLACK_BACKGROUND}${color}${local_space}${this}${local_space}${CustomLog.Use.FORMAT_RESET}` )
        }

        // ============= ============= ============= ============= ============= ============= =============

        return 'Done'
    }


    // - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - :
    // = : == : === : == : = : == : === : == : = : == : === : == : = : == : === : == : = : == : === : == : = :
    // - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - :


    static Values = {

        // # Used for spacing
        LENGTH:	        70,	//55
        INDENT_SIZE:    3,

        // # Characters
        ESC:	String.fromCharCode(27)

    }

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    static Colors = {
        white: 15,
        black: 0,
        green: 10,
        pink: 201,
        deep_blue: 217
    }

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    static Use = {

        // # Single Definitions

        init_push_down:     console.log( "\n\n" ),
        SPACE:              " ".repeat( CustomLog.Values.INDENT_SIZE*2 + 1 ),
        INDENT:	            " ".repeat( CustomLog.Values.INDENT_SIZE ),

        // # Enhanced Definitions

        SOLID_LINE:	        "_".repeat( CustomLog.Values.LENGTH ),
        BLANK_LINE:	        " ".repeat( CustomLog.Values.LENGTH ),

        // # Background Colors

        WHITE_BACKGROUND:	CustomLog.Values.ESC+"[48;5;15m",
        BLACK_BACKGROUND:	CustomLog.Values.ESC+"[48;5;0m",
        BLUE_BACKGROUND:	CustomLog.Values.ESC+"[48;5;"+CustomLog.Colors.deep_blue+"m",

        // # Foreground Colors

        WHITE_TEXT:	        CustomLog.Values.ESC+"[38;5;15m",
        GREEN_TEXT:	        CustomLog.Values.ESC+"[38;5;"+CustomLog.Colors.green+"m",
        PINK_TEXT:	        CustomLog.Values.ESC+"[38;5;"+CustomLog.Colors.pink+"m",

        // # Reset

        FORMAT_RESET:	    CustomLog.Values.ESC+"[0m"	// => [ ! ]   Reset
    }



    // - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - :
    // = : == : === : == : = : == : === : == : = : == : === : == : = : == : === : == : = : == : === : == : = :
    // - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - :



    //  #  Log Function  #  //
    static log() {
        console.log(
			`\n\n${CustomLog.top_banner}\
			\n\n${CustomLog.Use.SPACE}${arguments[0]}\
			\n${CustomLog.Use.INDENT}${CustomLog.Use.SOLID_LINE}\n\n`
		)
        let Args = Array.from(arguments).splice(1)
        Args.forEach( w => { console.log(  CustomLog.Use.SPACE + (
		    typeof w.get_custom_log_format === 'undefined' ?
                w : w.get_custom_log_format()
            ))
        })
        console.log(
            `\n${CustomLog.Use.INDENT}${CustomLog.Use.SOLID_LINE}\
            \n${CustomLog.Use.INDENT}${CustomLog.Use.SOLID_LINE}\n\n\n`  )
    }


    //  #  Simplifying  #  //
    static get top_banner(){ return(
        `${CustomLog.Use.INDENT}${CustomLog.Use.WHITE_BACKGROUND}${CustomLog.Use.BLANK_LINE}${CustomLog.Use.FORMAT_RESET}`
    )}
}



// ============= ============= ============= ============= ============= ============= ============= ============= =============
// ============= ============= ============= ============= ============= ============= ============= ============= =============







    // -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*-


    //                   Assessment Start


    // -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*-





// ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== -
//  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --



// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [{name: "ford prefect", occupation: "hitchhiker"}, {name: "zaphod beeblebrox", occupation: "president of the galaxy"}, {name: "arthur dent", occupation: "radio employee"}]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is the president of the galaxy." "Arthus Dent is a radio employee."


const sentencePerson = listPeople => {

    // TODO : comment my code

    return listPeople.reduce( (paragraph, currentPerson) =>
        `${paragraph} "${[ (currentPerson['name'].split(' ').map(
            (name) => { return name[0].toUpperCase() + name.slice(1) }
        ).join(' ')), currentPerson['occupation'] ].join(
            currentPerson['occupation'].startsWith('president') ?
            ' is the '  :  ' is a '
        )}."`,'')

}

CustomLog.log(  "People & Their Occupations",
    sentencePerson(people)
)





// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]





// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]
