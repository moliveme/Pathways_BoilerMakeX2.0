// ALL DATA

let core_classes = ["CS18000","CS18200","CS24000","CS25000","CS25100","CS25200",
"MA16100","MA16200","MA26100","MA26500"];

console.log(core_classes)

let AP4Credit = new Map([
    ["AP Biology", ["BIOL11000", "BIOL11100"],],
    ["AP Calculus AB", ["MA16500"],],
    ["AP Calculus BC", ["MA16500","MA16600"],],
    ["AP Calculus BC - AB (subscore)", ["MA16500"],],
    ["AP Chemistry", ["CHM11500","CS11600"],],
    ["AP Chinese language and culture", ["CHNS10100", "CHNS10200", "CHNS20100" , "CHNS20200"],],
    ["AP Computer science A or AB", ["CS17700"],],
    ["AP Computer science principles", ["CS17700"],],
    ["AP English language and composition", ["ENGL10600"],],
    ["AP English literature and composition", ["ENGL23100"],],
    ["AP Environmental science", ["EAPS12500"],],
    ["AP European history", ["HIST10400"],],
    ["AP French language", ["FR10100", "FR10200", "FR20100","FR20200"],],
    ["AP German language", ["GER10100", "GER10200", "GER20100","GER20200"],],
    ["AP Government and politics: comparative", ["POL14100"],],
    ["AP Government and politics: United States", ["POL10100"],],
    ["AP Human geography", ["EAPS12000"],],
    ["AP Italian language", ["ITAL10100", "ITAL10200", "ITAL20100","ITAL20200"],],
    ["AP Japanese language and culture", ["JPNS10100", "JPNS10200", "JPNS20100","JPNS20200"],],
    ["AP Latin", ["LATN10100", "LATN10200","LATN20100"],],
    ["AP Macroeconomics", ["ECON25200"],],
    ["AP Microeconomics", ["ECON25100"],],
    ["AP Physics I", ["PHYS22000"],],
    ["AP Physics II", ["PHYS22100"],],
    ["AP Physics B", ["PHYS22100","PHYS22000"],],
    ["AP Physics C: electricity and magnetism", ["PHYS27200"],],
    ["AP Physics C: mechanics", ["PHYS17200"],],
    ["AP Precalculus", ["MA15800"],],
    ["AP Psychology", ["PSY12000"],],
    ["AP Spanish language", ["SPAN10100", "SPAN10200", "SPAN20100", "SPAN20200"],],
    ["AP Spanish literature", ["SPAN24100"],],
    ["AP Statistics", ["STAT30100"],],
    ["AP United States history", ["HIST15100","HIST15200"],],
    ["AP World history", ["HIST10500"]],
    ])

console.log("test hash maps access" + AP4Credit.get("AP Physics B")[0]);

let rec = new Map([]); // Hashmap of Core Requirements

rec.set("Humanities", ['AAS27100', 'AD11300', 'AD11700', 'AD12500', 'AD22600', 'AD22700', 'AD24200', 'AD25100', 'AD25500', 'AD26500', 'AD26600', 'AD27500', 'AD38300', 'AD38400', 'AMST31000', 'AMST32500', 'AMST20100', 'AMST25000', 'ANSC33100', 'ARAB10100', 'ARAB10200', 'ARAB20100', 'ARAB20200', 'ARAB23900', 'ARAB28000', 'ARAB30100', 'ARAB30200', 'ASAM24000', 'ASEC30100', 'ASEC33100', 'ASEC35500', 'ASL10100', 'ASL10200', 'ASL20100', 'ASL20200', 'CHNS10100', 'CHNS10200', 'CHNS20100', 'CHNS20200', 'CHNS24100', 'CHNS28000', 'CHNS30100', 'CHNS30200', 'CHNS33000', 'CHNS40100', 'CHNS40200', 'CLCS23010', 'CLCS23100', 'CLCS23200', 'CLCS23300', 'CLCS23500', 'CLCS23700', 'CLCS23800', 'CLCS23900', 'CLCS33900', 'CLCS38000', 'CLCS38500', 'CMPL26600', 'CMPL26700', 'DANC25000', 'DANC37800', 'EDST20000', 'ENGL11000', 'ENGL20200', 'ENGL21700', 'ENGL21800', 'ENGL21900', 'ENGL22500', 'ENGL23000', 'ENGL23700', 'ENGL23800', 'ENGL24000', 'ENGL24100', 'ENGL25000', 'ENGL26400', 'ENGL26600', 'ENGL26700', 'ENGL27600', 'ENGL28600', 'ENGL32200', 'ENGL35000', 'ENGL35100', 'ENGL36000', 'ENGL36500', 'ENGL36700', 'ENGL37300', 'ENGL38100', 'ENGL38200', 'ENGL38900', 'FR10100', 'FR10200', 'FR10500', 'FR20100', 'FR20200', 'FR20500', 'FR30100', 'FR30200', 'FR33000', 'FR40100', 'FR40200', 'GER10100', 'GER10200', 'GER10500', 'GER20100', 'GER20200', 'GER20500', 'GER23000', 'GER30100', 'GER30200', 'GER33000', 'GER40100', 'GER40200', 'GREK10100', 'GREK10200', 'GREK20100', 'GREK20200', 'GS10000', 'GSLA30100', 'HEBR10100', 'HEBR10200', 'HEBR12100', 'HEBR12200', 'HEBR20100', 'HEBR20200', 'HEBR22100', 'HEBR22200', 'HEBR28000', 'HEBR38000', 'HIST10300', 'HIST10400', 'HIST10500', 'HIST15100', 'HIST15200', 'HIST21000', 'HIST21100', 'HIST23800', 'HIST23900', 'HIST24000', 'HIST24100', 'HIST24300', 'HIST24500', 'HIST24600', 'HIST25000', 'HIST27100', 'HIST27200', 'HIST30000', 'HIST30305', 'HIST30400', 'HIST30505', 'HIST30605', 'HIST31005', 'HIST31305', 'HIST31405', 'HIST31505', 'HIST32300', 'HIST32400', 'HIST32900', 'HIST33205', 'HIST33300', 'HIST33400', 'HIST33805', 'HIST34000', 'HIST34100', 'HIST34300', 'HIST34400', 'HIST34901', 'HIST35000', 'HIST35100', 'HIST35205', 'HIST35400', 'HIST35500', 'HIST35900', 'HIST36305', 'HIST37100', 'HIST37500', 'HIST37700', 'HIST38001', 'HIST38200', 'HIST38300', 'HIST38400', 'HIST38505', 'HIST38700', 'HIST39400', 'HIST39600', 'HIST39800', 'HIST41005', 'HIST47005', 'ITAL10100', 'ITAL10200', 'ITAL10500', 'ITAL20100', 'ITAL20200', 'ITAL20500', 'ITAL28000', 'ITAL28100', 'ITAL30100', 'ITAL30200', 'ITAL33000', 'ITAL33300', 'ITAL38000', 'JPNS10100', 'JPNS10200', 'JPNS20100', 'JPNS20200', 'JPNS30100', 'JPNS30200', 'JPNS40100', 'JPNS40200', 'JWST33000', 'LATN10100', 'LATN10200', 'LATN20100', 'LATN20200', 'LATN34300', 'LATN34400', 'LATN34500', 'LATN34600', 'LATN34700', 'LATN44200', 'LATN44300', 'LATN44400', 'LATN44500', 'LATN44600', 'LC23900', 'LC33300', 'MUS11200', 'MUS13200', 'MUS25000', 'MUS26100', 'MUS36100', 'MUS37600', 'MUS37800', 'PHIL11000', 'PHIL11100', 'PHIL11400', 'PHIL20600', 'PHIL21900', 'PHIL22300', 'PHIL22500', 'PHIL23000', 'PHIL23100', 'PHIL24000', 'PHIL24200', 'PHIL27500', 'PHIL28000', 'PHIL29000', 'PHIL30100', 'PHIL30200', 'PHIL30300', 'PHIL30400', 'PHIL41100', 'PHIL42400', 'PTGS10100', 'PTGS10200', 'PTGS10500', 'PTGS20100', 'PTGS20200', 'PTGS30100', 'PTGS30200', 'REL20000', 'REL23000', 'REL23100', 'RUSS10100', 'RUSS10200', 'RUSS20100', 'RUSS20200', 'RUSS28100', 'RUSS30100', 'RUSS30200', 'RUSS33000', 'RUSS40100', 'RUSS40200', 'SPAN10100', 'SPAN10200', 'SPAN10500', 'SPAN20100', 'SPAN20200', 'SPAN20500', 'SPAN23500', 'SPAN30100', 'SPAN30200', 'SPAN30500', 'SPAN30801', 'SPAN33000', 'SPAN40100', 'SPAN40200', 'THTR20100', 'WGSS28000', 'YDAE33100', 'YDAE35500', 'InformationLiteracy', 'BIOL11500', 'COM25100', 'EDCI27000', 'EDPS10500', 'ENGL10600', 'ENGL10800', 'ENGL30400', 'ENGL38000', 'ENGR13100', 'ENGR13300', 'ENGR14100', '*ENGR16100', '*ENGR16200', 'HONR19903', 'ILS17500', 'MGMT17500', 'NUR22301', 'PHIL12000', 'PHIL26000', 'POL30000', 'PSY10000', 'SCLA10100', 'STAT11300', 'STAT30100']);
rec.set("Behavioural Science", ['AD33900', 'AGEC20300', 'AGEC20400', 'AGEC21700', 'AGEC25000', 'AGR20100', 'AMST21000', 'ANTH10000', 'ANTH20100', 'ANTH20300', 'ANTH20500', 'ANTH23000', 'ANTH37900', 'CLCS18100', 'COM21200', 'COM22400', 'ECON21000', 'ECON25100', 'ECON25200', 'ECON51400', 'EDCI28500', 'EDPS23500', 'EDPS26500', 'EDPS31600', 'EDST20010', 'EDST24800', 'ENGL22700', 'ENGL22800', 'HDFS20100', 'HDFS21000', 'HDFS28000', 'HTM37200', 'LC26100', 'LING20100', 'POL10100', 'POL12000', 'POL13000', 'POL14100', 'POL22200', 'POL22300', 'POL23000', 'POL23100', 'POL23500', 'POL32600', 'POL32700', 'POL33500', 'POL36000', 'POL37200', 'PSY12000', 'PSY12300', 'SCLA20000', 'SLHS22700', 'SOC10000', 'SOC22000', 'SOC27500', 'SOC32600', 'SOC34400', 'SOC35200', 'SOC37400', 'SOC42900', 'WGSS28000', 'WGSS28200', 'WGSS38000']);
rec.set("Oral Communications", ['COM11400', 'COM21700', 'EDCI49600', 'EDCI49800', 'EDPS31500', 'EDPS49800', 'HDFS45000', 'SCLA10200']);
rec.set("Information Literacy", ['AGR20100', 'BIOL11500', 'COM25100', 'EDCI27000', 'EDPS10500', 'ENGL10600', 'ENGL10800', 'ENGL30400', 'ENGL38000', 'ENGR13100', 'ENGR13300', 'ENGR14100', '*ENGR16100', '*ENGR16200', 'HONR19903', 'ILS17500', 'MGMT17500', 'NUR22301', 'PHIL12000', 'PHIL26000', 'POL30000', 'PSY10000', 'SCLA10100', 'STAT11300', 'STAT30100', 'TECH12000']);
rec.set("Quantitative Reasoning", ['EDCI22200', 'MA13800', 'MA15300', 'MA15400', 'MA15555', 'MA15800', 'MA15910', 'MA16010', 'MA16020', 'MA16100', 'MA16200', 'MA16500', 'MA16600', 'MA17300', 'MA17400', 'MA18100', 'MA18200', 'MA19000', 'MA22000', 'MA22100', 'MA22200', 'MA22300', 'MA22400', 'MA23100', 'MA23200', 'MA26100', 'MA26200', 'MA26500', 'MA26600', 'MA27100', 'MA27101', 'MA35100', 'MA36600', 'PHIL15000']);
rec.set("Science", ['ANTH20400', 'ASTR26300', 'ASTR26400', 'BIOL11000', 'BIOL11100', 'BIOL11200', 'BIOL11300', 'BIOL12100', 'BIOL13100', 'BIOL13500', 'BIOL14501', 'BIOL14502', 'BIOL14600', 'BIOL20100', 'BIOL20200', 'BIOL20300', 'BIOL20400', 'BIOL20500', 'BIOL20600', 'BIOL30200', 'BTNY11000', 'CHM11100', 'CHM11200', 'CHM11500', 'CHM11600', 'CHM12500', 'CHM12600', 'CHM12901', 'CHM13600', 'CHM20000', 'EAPS10200', 'EAPS10500', 'EAPS10900', 'EAPS11100', 'EAPS11200', 'EAPS11600', 'EAPS11700', 'EAPS12900', 'EAPS13800', 'EAPS22100', 'EAPS22500', 'EAPS24300', 'EAPS24400', 'EAPS31201', '*ENGR16100', '*ENGR16200', 'ENTM10500', 'ENTM20600', 'ENTM21000', 'ENTM22810', 'ENTM22820', 'HORT10100', 'NRES23000', 'NUTR20200', 'NUTR30300', 'PHYS15200', 'PHYS17200', 'PHYS21400', 'PHYS21500', 'PHYS21800', 'PHYS21900', 'PHYS22000', 'PHYS22100', 'PHYS23000', 'PHYS24100', 'PHYS27200', 'SLHS30600']);
rec.set("Science, Tech and Society", ['ABE22600', 'ABE29000', 'AD39500', 'AGRY12500', 'AGRY28500', 'AGRY29000', 'AMST31000', 'AMST32500', 'ANSC10200', 'ANTH21000', 'ASEC35500', 'ASM23600', 'BCHM10000', 'BCM10001', 'BIOL12100', 'BIOL31200', 'BTNY20100', 'BTNY21100', 'BTNY28500', 'CE35500', 'CGT17208', 'CM10000', 'COM25100', 'CS10100', 'EAPS10000', 'EAPS10400', 'EAPS10600', 'EAPS11300', 'EAPS12000', 'EAPS12500', 'EAPS12900', 'EAPS20000', 'EEE35500', 'ENGL22300', 'ENGL22600', 'ENGL23400', 'ENGR20100', 'ENGR27920', 'ENGR31000', 'ENGR37920', 'ENGR47920', 'ENTM10500', 'ENTM12800', 'ENTM21800', 'EPCS10100', 'EPCS10200', 'EPCS11100', 'EPCS12100', 'EPCS20100', 'EPCS20200', 'EPCS30100', 'EPCS30200', 'EPCS40100', 'EPCS40200', 'FNR10300', 'FNR12500', 'FNR22310', 'FNR23000', 'FNR24000', 'FS16100', 'HIST30305', 'HIST30605', 'HIST31305', 'HIST31405', 'HIST33205', 'HIST33300', 'HIST33400', 'HIST35000', 'HIST35205', 'HIST36305', 'HIST38001', 'HIST38400', 'HIST38700', 'HONR19901', 'HONR46000', 'HORT12100', 'HORT30600', 'HSCI20100', 'HSCI20200', 'IT22600', 'LA16100', 'ME29000', 'NRES12500', 'NRES29000', 'NUTR39800', 'PHIL20700', 'PHIL20800', 'PHIL22100', 'PHIL27000', 'POL22300', 'POL23700', 'PUBH20200', 'SA10202', 'SLHS11500', 'SLHS21500', 'SLHS30900', 'SOC33500', 'STAT11300', 'SYS30000', 'SYS35000', 'SYS40000', 'TECH12000', 'VIP17911', 'VIP17920', 'VIP27920', 'VIP37920', 'VIP47920', 'YDAE35500']);
rec.set("Written Communication", ['AMST10100', 'CLCS23100', 'CLCS23700', 'CLCS33900', 'COM20400', 'EDCI20500', 'ENGL10600', 'ENGL10800', 'ENGL30400', 'ENGL38000', 'HONR19903', 'PHIL26000', 'SCLA10100', 'SPAN33000']);
rec.set("Greater Issues in Science",['BIOL31200', 'BIOL48300', 'CHM49000', 'CHM49000', 'CNIT49900', 'EAPS30100', 'EAPS32700', 'EAPS36000', 'EAPS36400', 'EAPS37500', 'HIST35205', 'HONR29900', 'HONR39900', 'MA27900', 'ME49200', 'PHYS31700', 'PHYS49000', 'POL32700','STAT49000']);
rec.set("Laboratory Sciences", ['BIOL11000/11100', 'BIOL12100/13100/13500', 'CHM11500/11600', 'CHM12500/12600', 'EAPS11100/11200', 'PHYS17200/27200', 'PHYS17200/24100', 'PHYS17200/22100', 'PHYS21800/21900', 'PHYS22000/22100', 'PHYS23300/23400']);
rec.set("Languages",['GER10100', 'GER10200', 'GER11200', 'GER20100', 'GER20200', 'GER21100', 'GER21200', 'GER22300', 'GER22400', 'FR10100', 'FR10200', 'FR11200', 'FR20100', 'FR20200', 'FR21100', 'FR21200', 'FR22400', 'FR23000', 'FR24100', 'FR28000', 'FR30100', 'FR30200', 'FR31200', 'FR32400', 'FR33000', 'FR34100', 'FR34200', 'FR38000', 'FR39400', 'FR39600', 'FR39900', 'FR40100', 'FR40200', 'FR42400', 'FR44300', 'FR48000', 'CLCS18100', 'CLCS22000', 'CLCS23010', 'CLCS23100', 'CLCS23200', 'CLCS23300', 'CLCS23400', 'CLCS23500', 'CLCS23600', 'CLCS23700', 'CLCS23800', 'CLCS23900', 'CLCS28000', 'CLCS33700', 'CLCS33900', 'CLCS38000', 'CLCS38100',  'CLCS38300', 'CLCS38500', 'CLCS38600', 'CLCS38700', 'CLCS48000', 'CLCS48100', 'CLCS48300', 'CLCS49900', 'CHNS10100', 'CHNS10200', 'CHNS10700', 'CHNS20100', 'CHNS20200', 'CHNS20700', 'CHNS22400', 'CHNS23000', 'CHNS24100', 'CHNS28000', 'CHNS28100', 'CHNS28500', 'CHNS30100', 'CHNS30200', 'CHNS30500', 'CHNS31300', 'CHNS33000', 'CHNS34100', 'CHNS34200', 'CHNS39900', 'CHNS40100', 'CHNS40200', 'CHNS49000', 'CHNS49300', 'ARAB10100', 'ARAB10200', 'ARAB11100', 'ARAB11200', 'ARAB20100', 'ARAB20200', 'ARAB21100', 'ARAB21200', 'ARAB22400', 'ARAB23000', 'ARAB23900', 'ARAB28000', 'ARAB28100', 'ARAB30100', 'ARAB30200', 'ARAB33400']);
rec.set("Technical Writing",['ENGL30400','ENGL30900','ENGL41900','ENGL42000','ENGL42100','ENGL42201','ENGL42400','ENGL49000','MGMT39000','CHM46200', 'COM21700']);
rec.set("Technical Presentation",['BIOL44100','COM11400','COM31400','COM31500','COM32400','COM41500','SCLA10200','CHM46200', 'COM21700']);

let human = false;
let beh_sci = false;
let oral = false;
let info_lit = false;
let quan_res = false;
let sci = false;
let sts = false;
let wrt_com = false;
let grt_is = false;
let lab_sci = false;
let lang = false;
let tech_wrt = false;
let tech_pres = false;

let course_counter = new Map([]);

for (let [i,v] of rec) {
    let flag = false;
    switch (i) {
        case "Humanities":
            if (human) {
                flag = true;
            }
            break;
        case "Behavioural Science":
            if (beh_sci) {
                flag = true;
            }
            break;
        case "Oral Communication":
            if (oral) {
                flag = true;
            }
            break;
        case "Information Literacy":
            if (info_lit) {
                flag = true;
            }
            break;
        case "Quantitative Reasoning":
            if (quan_res) {
                flag = true;
            }
            break;
        case "Science":
            if (sci) {
                flag = true;
            }
            break;
        case "Science, Tech and Society":
            if (sts) {
                flag = true;
            }
            break;
        case "Written Composition":
            if (wrt_com) {
                flag = true;
            }
            break;
        case "Greater Issues in Science":
            if (grt_is) {
                flag = true;
            }
            break;
        case "Laboratory Science":
            if (lab_sci) {
                flag = true;
            }
            break;
        case "Languages":
            if (lang) {
                flag = true;
            }
            break;
        case "Technical Writing":
            if (tech_wrt) {
                flag = true;
            }
            break;
        case "Technical Presentation":
            if (tech_pres) {
                flag = true;
            }
            break;
    }
    if (!flag) {
        for (let j = 0; j < v.length; j++) {
            if (course_counter.has(v[j])) {
                let arr = course_counter.get(v[j]); // gets the course list
                arr[1].push(i);
                course_counter.set(v[j], [arr[0] + 1, arr[1]]) // adds 1 to counter and adds the requirement it satisfies
            } else {
                course_counter.set(v[j], [1, [i]]);
            }
        }
    }
}
// creates array sorted in descending order
const sorted_course_counter = new Map([...course_counter.entries()].sort((a, b) => a[1][0] - b[1][0]).reverse());


// END OF ALL DATA

// FUNCTIONS BEGIN


function incomplete_core(input_array) { // input text field
    let left_core_classes = core_classes.filter(val => !input_array.includes(val)); //  removes courses that are in both arrays
    return left_core_classes;
}


//console.log(sorted_course_counter);

function course_rating(course_name) {
    return "https://www.ratemycourses.io/purdue/course/"+course_name.toLowerCase();
}

function reddit_search(course_name) {
    if (course_name.slice(-2) == "00") {
        return "https://www.reddit.com/r/Purdue/search/?q="+ course_name.slice(0,-2) +"&restrict_sr=1&sr_nsfw=";
    }
    return "https://www.reddit.com/r/Purdue/search/?q="+ course_name +"&restrict_sr=1&sr_nsfw=";

}

//provide array of classes student finished, returns map oof
function courselist_return(historyofclasses) {
    let returned_courses = sorted_course_counter;

}

//category is for example Oral Communications, history_in_that_category is history of classes,
//returns sorted courses in that category
function return_particular_category(category, history_in_that_category) {
    let total_courses_in_the_category = rec.get(category);
    //console.log("originally ",total_courses_in_the_category)
    for (let i = 0; i < history_in_that_category.length; i++)
    {
        for (let j = 0; j < rec.get(category).length; j++) {
            if (rec.get(category)[j] == history_in_that_category[i]) {
                delete total_courses_in_the_category[j];
            }
        }

    }
    total_courses_in_the_category.sort((a, b) => a[1][0] - b[1][0]).reverse();

    console.log(total_courses_in_the_category);
    return total_courses_in_the_category;
}
return_particular_category("Oral Communications", ["EDPS31500"])


// MRIDU CREATED EVERYTHING FROM HERE

let completedCoursesOptions = core_classes

for (let [i,v] of AP4Credit) {
    console.log('Key is: ' + i + '. Value is: ' + v);
    completedCoursesOptions.push(i)
}

completedCoursesOptions.sort()

let temp_CompletedCoursesOptions = []
let displayHTML = ""

let completedClassesDiv = document.getElementById("completedClassesDiv")
console.log(completedClassesDiv)
let completedCourses
let completedCoursesEquiv

function start() {

    console.log(localStorage.getItem("completedCourses") === null)

    if (localStorage.getItem("completedCourses") === null) {
        localStorage.completedCourses = JSON.stringify(["init"])
    } else {
        
        completedClassesDiv.innerHTML = "";
        if (JSON.parse(localStorage.completedCourses)[0] !== "init") {

            completedCourses = JSON.parse(localStorage.completedCourses)
            
            displayCompletedCourses()
        }
    }
}

start()

completedCourses = JSON.parse(localStorage.completedCourses)

function createInitDropDownOnPage1() {

    const dropdown1 = document.getElementById("myDropdown")
    displayHTML = ""

    completedCoursesOptions.forEach((el) => {

        displayHTML += `
        <a style="font-family: Arial" onclick="addCompletedClass('${el}')">
            ${el}
        </a>
        `

    })

    dropdown1.innerHTML = displayHTML

    displayHTML = ""

}

createInitDropDownOnPage1()

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

function addCompletedClass(...clas) {

    if (completedCourses.includes(clas[0])) {
        // continue
    } else {

        if (completedCourses[0] === "init") {
            completedCourses[0] = clas[0]
        } else {

            completedCourses.push(clas[0])
        }
    }

    localStorage.completedCourses = JSON.stringify(completedCourses);

    displayCompletedCourses()

}

let temp = []

function removeCompletedClass(...clas) {

    completedClassesDiv.innerHTML = ""

    console.log("before deleting: " + completedCourses)

    completedCourses.forEach((el) => {

        if (el !== clas[0]) { // to delete

            temp.push(el) 
        }

    })

    completedCourses = temp
    console.log(completedCourses)
    localStorage.completedCourses = JSON.stringify(completedCourses)

    displayCompletedCourses()

    temp = []
}

function convertCreditsToPurdueEquiv() {

    completedCourses.forEach(el => {

        if (AP4Credit.get(el) !== undefined) {
            AP4Credit.get(el).forEach(ell => {

                if (!temp.includes(ell)) {
                    temp.push(ell)
                }
            })
        } else {
            temp.push(el)
        }
    
    })

    completedCoursesEquiv = temp

    localStorage.completedCoursesEquiv = JSON.stringify(completedCoursesEquiv)

    temp = []

}

function displayCompletedCourses() {

    let completedClassesDiv = document.getElementById("completedClassesDiv")

    completedClassesDiv.innerHTML = ""
    
    completedCourses.forEach(el => {

        completedClassesDiv.innerHTML += `
        <div class="completedClass-btn">

            <div>
             ${el}
            </div>

            <button class="completedClassX-btn" onclick="removeCompletedClass('${el}')">
            x
            </button>
        </div>
    `  

    })

}


