// ALL DATA

let core_classes = ["CS18000","CS18200","CS24000","CS25000","CS25100","CS25200",
"MA16100","MA16200","MA26100","MA26500"];


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
let gen_ed = false;

console.log("test hash maps access" + AP4Credit.get("AP Physics B")[0]);

let rec = new Map([]); // Hashmap of Core Requirements

let raw = "AAS 27100 - Introduction To African American Studies (satisfies Human Cultures Humanities for core)\n" +
    "AAS 27700 - African American Popular Culture\n" +
    "AAS 35900 - Black Women Writers\n" +
    "AAS 37000 - Black Women Rising\n" +
    "AAS 37100 - The African American Experience The Black Athlete, African American Health, Anthropology and Blackness, Blackness & Culture, Issues in Contemporary Africa, Racism and Prejudice in America, African American Music, Black Leisure & Recreation, African American Athletes and the Problem of Race, Black Politics, Black Women in Politics\n" +
    "AAS 37300 - Issues In African American Studies Afr Diaspora Caribbn&LtnAmer, African American Women and Activism, Black Male Youth Culture in the Wire, Black Speculative Fiction, Blackness and Culture, History of Injustice in the US, Issues in African American Studies, Lit of the African Diaspora, Phil, Cult, African, American, Race and Religion in the U.S., Race, Religion & Popular Culture in the U.S.; America, Studies in African Diaspora, The Harlem Renaissance, Toni Morrison, The Black Community, North African Lit & Culture, Post Sout Black Lit Pos 1960,&nbsp;Philosophy and Culture\n" +
    "AAS 37500 - The Black Family\n" +
    "AAS 37600 - The Black Male\n" +
    "AAS 37700 - African American Sexuality And Society\n" +
    "AAS 39200 - Caribbean History And Culture\n" +
    "AAS 47300 - Blacks In Hollywood Film\n" +
    "AAS 49100 - Special Topics In African American Studies African-American Protest Lit, Afro Borinquen Cult&Identity, Black Satire and Humor, Carnival: Re-member Diasp Trad, Contemporary Issues in Black Education, Identity in the Midst of Differences, Teaching the Wire, The Classics and Black Literature, W.E.B. DuBois, African American Chorl Foundtns, Cultural Heritage, Africa in 20th Century\n" +
    "AAS 57500 - Theories Of African American Studies\n" +
    "AD 12500 - Introduction To Interior Design\n" +
    "AD 22600 - History Of Art To 1400 (satisfies Human Cultures Humanities for core)\n" +
    "AD 22700 - History Of Art Since 1400 (satisfies Human Cultures Humanities for core)\n" +
    "AD 25100 - History Of Photography I (satisfies Human Cultures Humanities for core)\n" +
    "AD 25500 - Art Appreciation (satisfies Human Cultures Humanities for core)\n" +
    "AD 31100 - Ancient Greek Art\n" +
    "AD 31200 - Ancient Roman Art\n" +
    "AD 33400 - New Media Culture\n" +
    "AD 33900 - Women Artists In The 20th Century\n" +
    "AD 34300 - Northern Renaissance Art\n" +
    "AD 34400 - Latin American Art In The 20th Century\n" +
    "AD 34600 - Italian Renaissance Art\n" +
    "AD 34800 - History Of Islamic Art\n" +
    "AD 35900 - Medieval European Art\n" +
    "AD 38000 - Baroque Art\n" +
    "AD 38200 - A Global History Of Modern Art\n" +
    "AD 38300 - Modern Art (satisfies Human Cultures Humanities for core)\n" +
    "AD 38400 - Contemporary Art (satisfies Human Cultures Humanities for core)\n" +
    "AD 38500 - History Of Interior Design\n" +
    "AD 39100 - History Of Chinese Art\n" +
    "AD 39500 - History Of Design\n" +
    "AD 45400 - Modern Architecture\n" +
    "AGEC 21700 - Economics (satisfies Behavioral/Social Science for core)\n" +
    "AMST 10100 - America And The World\n" +
    "AMST 20100 - Interpreting America African American Pop Culture, American Social Movements - Honors,Asian American Pop Culture, Automobiles in America, Fan Users and Games, Global Habitats, Community Development & Sustainability, Electronic Music & Pop Culture, Fashion & Technology, Interpreting America, Intro Asian American Studies, Intro to American Studies: Arab-American Literature, Global habitats, Community Development & Sustainability,&nbsp;Asian American Pop Culture&nbsp;&nbsp;(select options may satisfy Human Cultures Humanities for core)\n" +
    "AMST 30100 - Perspectives On America 1960’s America, African-American Protest Lit, American Beauty, American Representations of the Middle East and North Africa, American Studies/Global Studies, American Virgin, Arabic Lit in Translation, Beat Generation and American Culture, Civil War Memory, Contemporary Issues in Asian American Studies, Cultures of Beauty, Democracy and Education, Diversity in American Univeristy, Food in Modern America, Gender & Revolution in Modern America, Gender, Media & Pop Culture, Gender, Science & Technology,Glb Hlth Sustainblty & Com Dev, Intro Asian American Studies, Living History, Muslims in America, New Media Culture, Race, Religion, and Popular Culture in America, Sex, Race, and Science, Sport/Gender, Technology, Culture & Society, The Color Line, The Other Great Depression - Honors, Virtual Reality, Women and Health in America, Zora Neale Hurston, Understanding the NFL, Social Issues Immigration, Spanish American Literature in Translation, Theories of Global Studies, Electr Music & Pop Cult, New Media,Data Viz For Societal Problems,The 1960’s Rock to Revolution, North African Lit & Culture, AsAm Popular Culture, Global Hist Theory & Practice, Afro-Asia Pol & Cul Alli, Perspectives on America, Post Soul Black Lit Post 1960,&nbsp;Sports & Popular Feminisms,&nbsp;Sports & Popular Feminisms,&nbsp;Contmp Issue ASAM: Disney\n" +
    "AMST 31000 - Invention, Innovation, And Design\n" +
    "AMST 32000 - Understanding The National Football League\n" +
    "AMST 32500 - Sports, Technology, And Innovation\n" +
    "ANTH 10000 - Being Human: Introduction To Anthropology (fulfills Behavior/Social Science for core)\n" +
    "ANTH 20100 - Introduction To Archaeology And World Prehistory (fulfills Behavior/Social Science for core)\n" +
    "ANTH 20300 - Biological Bases Of Human Social Behavior (fulfills Behavior/Social Science for core)\n" +
    "ANTH 20400 - Human Origins\n" +
    "ANTH 20500 - Human Cultural Diversity (fulfills Behavior/Social Science for core)\n" +
    "ANTH 21000 - Technology And Culture (satisfies Science, Technology and Society for core)\n" +
    "ANTH 21200 - Culture, Food And Health\n" +
    "ANTH 23000 - Gender Across Cultures (fulfills Behavior/Social Science for core)\n" +
    "ANTH 23500 - The Great Apes\n" +
    "ANTH 25400 - Archaeological Hoaxes, Myths And Frauds\n" +
    "ANTH 25600 - Archaeology Of Beer\n" +
    "ANTH 28200 - Introduction To LGBTQ Studies\n" +
    "ANTH 30700 - The Development Of Contemporary Anthropological Theory\n" +
    "ANTH 31000 - Mortuary Practices Across Cultures\n" +
    "ANTH 31100 - The Archaeology Of The Ancient Andes\n" +
    "ANTH 31200 - The Archaeology Of Ancient Egypt And The Near East\n" +
    "ANTH 31300 - Archaeology Of North America\n" +
    "ANTH 32000 - Ancient States And Empires\n" +
    "ANTH 32700 - Environment And Culture\n" +
    "ANTH 33500 - Primate Behavior\n" +
    "ANTH 33600 - Human Variation\n" +
    "ANTH 33700 - Human Diet: Origins And Evolution\n" +
    "ANTH 34000 - Global Perspectives On Health\n" +
    "ANTH 34100 - Culture And Personality\n" +
    "ANTH 35800 - African Cultures\n" +
    "ANTH 37000 - Ethnicity And Culture\n" +
    "ANTH 37300 - Anthropology Of Religion\n" +
    "ANTH 37700 - Anthropology Of Hunter-Gatherer Societies\n" +
    "ANTH 37800 - Archaeology And Cultural Anthropology Of Mesoamerica (Mexico, Belize And Guatemala)\n" +
    "ANTH 37900 - Native American Cultures (fulfills Behavior/Social Science for core)\n" +
    "ANTH 38000 - Using Anthropology In The World\n" +
    "ANTH 38400 - Designing For People: Anthropological Approaches\n" +
    "ANTH 39200 - Selected Topics In Anthropology Anthropology of Water: Development & Justice, Anthropology and Blackness, Anthropology of Reproductive Health, Anthropology of Tourism & Global Culture, Anthropology of Violence, Archaeology of Religion and Ritual, Blackness and Culture, Community Engagement, Cult Shaping Violence, Emcees & Jihadis Race & Pop Cult, Ethnicity & Culture, People & Parks: Anthropology of Conservation, Pregnancy Birth & Babies, Race & Religion in the U.S., Race, Religion and Popular Culture in America, Sustain Dev & Sovern Africa - Honors, The African Amer Experience, Urban-Rural Change in Latin America, Anthropology of Beer Craft, Visual Anthropology, Myths & Hoaxes in Archaeology, Evidence:How Things BecomeTrue, Amazonia and Film,&nbsp;Archaeology of Beer,&nbsp;Critical Approach to Sci&Tech,&nbsp;Intro to Forensic Anthropology\n" +
    "ANTH 40400 - Comparative Social Organization\n" +
    "ANTH 41400 - Introduction To Language And Culture\n" +
    "ANTH 42500 - Archaeological Method And Theory\n" +
    "ANTH 43600 - Human Evolution\n" +
    "ANTH 48200 - Sexual Diversity In Global Perspectives\n" +
    "ANTH 50400 - Archaeological Theory\n" +
    "ANTH 50500 - Culture And Society\n" +
    "ANTH 50700 - History Of Theory In Anthropology\n" +
    "ANTH 53400 - Human Osteology\n" +
    "ANTH 53500 - Foundations Of Biological Anthropology\n" +
    "ANTH 53600 - Primate Ecology\n" +
    "ANTH 57500 - Economic Anthropology\n" +
    "ANTH 59200 - Selected Topics In Anthropology Anth Ed: Race, Gender, Class & Idnt, Applied Anthropology, Developmental Anthropology, Evidence and Expertise, Human Genitals and Cultures, Medical Anthropology, Anthroplogy of Aging,&nbsp;Climate Change in Antiquity\n" +
    "ARAB 23000 - Arabic Literature In Translation\n" +
    "ARAB 23900 - Arab Women Writers\n" +
    "ARAB 28000 - Arabic Culture (satisfies Human Cultures Humanities for core)\n" +
    "ARAB 28100 - Introduction To Islamic Civilization And Culture\n" +
    "ARAB 33400 - North African Literature And Culture\n" +
    "ARAB 58700 - Modern Arab Thought\n" +
    "ASAM 24000 - Introduction To Asian American Studies\n" +
    "ASAM 34000 - Contemporary Issues In Asian American Studies Afro-Asia Pol & Cul Alli, Introduction To Asian American Studies, Asian American Pop Cult, Contemporary Issues In Asian American Studies, Contmp Issue ASAM: Disney, Social Issues in Immigration\n" +
    "ASEC 49100 - Special Topics In Agricultural Science And Education Communication Consequences of Race and Privilege in Today’s American\n" +
    "ASL 28000 - American Deaf Community: Language, Culture, And Society\n" +
    "CHNS 24100 - Introduction To The Study Of Chinese Literature\n" +
    "CHNS 28000 - Topics In Chinese Civilization And Culture\n" +
    "CHNS 28100 - Introduction To Chinese Food Culture\n" +
    "CHNS 33000 - Introduction To Chinese Cinema\n" +
    "CHNS 34100 - Chinese Literature I: Traditional Chinese Literature\n" +
    "CHNS 34200 - Chinese Literature II: Modern Chinese Literature\n" +
    "CHNS 49000 - Special Topics In Chinese Language Food Culture Drinks and Snacks, Intro to Chinese Food Culture, Introductions to Chinese Films\n" +
    "CHNS 59400 - Special Topics In Chinese Literature Chinese Classical Tales, Chinese Lit and Culture, Chinese Poetry & Painting, Dream of Red Chamber, Modern Chinese Theatre, Poetry of Li Bae and Du Fu, Special Topics in Chinese Literature, Tang Dynasty Poetry\n" +
    "CLCS 18100 - Classical World Civilizations (satisfies Behavior/Social Science for core)\n" +
    "CLCS 23010 - Survey Of Greek Literature In Translation (satisfies Human Cultures Humanities for core)\n" +
    "CLCS 23100 - Survey Of Latin Literature (satisfies Human Cultures Humanities for core) (satisfies Written Communication for core)\n" +
    "CLCS 23300 - Comparative Mythology (satisfies Human Cultures Humanities for core)\n" +
    "CLCS 23500 - Introduction To Classical Mythology (satisfies Human Cultures Humanities for core)\n" +
    "CLCS 23700 - Gender And Sexuality In Greek And Roman Antiquity (satisfies Human Cultures Humanities for core) (satisfies Written Communication for core)\n" +
    "CLCS 23800 - The Tragic Vision (satisfies Human Cultures Humanities for core)\n" +
    "CLCS 23900 - The Comic Vision\n" +
    "CLCS 28000 - Topics In Classical Civilization - (Ancient Near Eastern History & Culture, Culture and Society in the Age of Pericles, Studies in Greek Warfare)\n" +
    "CLCS 33700 - The Ancient Epic\n" +
    "CLCS 33900 - Literature And The Law (satisfies Human Cultures Humanities for core) (satisfies Written Communication for core)\n" +
    "CLCS 38000 - Alexander The Great And Hellenistic World\n" +
    "CLCS 38100 - Julius Caesar: Statesman, Soldier, Citizen\n" +
    "CLCS 38300 - The Roman Empire\n" +
    "CLCS 38400 - Ancient Western Medicine\n" +
    "CLCS 38500 - Science, Medicine And Magic In The Ancient West\n" +
    "CLCS 38600 - Ancient Greek Religion\n" +
    "CLCS 38700 - Roman Religion\n" +
    "CLCS 48000 - Potters And Society In Antiquity\n" +
    "CLCS 48100 - Culture And Society In The Age Of Pericles\n" +
    "CLCS 48300 - Republican Rome\n" +
    "CLCS 59300 - Special Topics In Classical Literature - (The Classics and Black Literature)\n" +
    "CMPL 23000 - Crossing Borders: Introduction To Comparative Literature Arab Women Writers, Arab-American Literature, Arabic Culture, Arthurian Lit: Medieval to Mod, Brit Lit thru 18 Ct, Dragons, Intro to Comparative and Arabic Literature, Intro to Comparative Literature, Intro to Islamic Civ & Cul, Israel & the Modern World, Italian Women Writers in Translation, Myths & Legends: Elves to Elvis, Nature in German Literature, Philosophy of Art, Russian Literature II, Soviet Literature and Beyond, Spanish American Literature in Translation, Women Writers in Translation, North African Lit & Culture, The Comic Vision, A Brief History of Doom,&nbsp;German Literature in Translation\n" +
    "CMPL 26600 - World Literature: From The Beginnings To 1700 A D (satisfies Human Cultures Humanities for core)\n" +
    "CMPL 26700 - World Literature: From 1700 A D To The Present (satisfies Human Cultures Humanities for core)\n" +
    "COM 22400 - Communicating In The Global Workplace (satisfies Behavioral/Social Science for core)\n" +
    "COM 25000 - Mass Communication And Society\n" +
    "COM 25100 - Communication, Information, And Society (satisfies Science, Technology and Society for core)\n" +
    "COM 31200 - Rhetoric In The Western World\n" +
    "COM 31400 - Advanced Presentational Speaking\n" +
    "COM 31500 - Speech Communication Of Technical Information\n" +
    "COM 31800 - Principles Of Persuasion\n" +
    "COM 32000 - Small Group Communication\n" +
    "COM 32900 - History Of The Mass Media\n" +
    "COM 35100 - Mass Communication Ethics\n" +
    "DANC 37800 - Survey Of Concert Dance History\n" +
    "ECON 21000 - Principles Of Economics\n" +
    "ECON 25100 - Microeconomics (satisfies Behavioral/Social Science for core)\n" +
    "ECON 25200 - Macroeconomics (satisfies Behavioral/Social Science for core)\n" +
    "EDPS 23500 - Learning And Motivation (satisfies Behavioral/Social Science for core)\n" +
    "EDPS 31500 - Collaborative Leadership: Interpersonal Skills\n" +
    "EDPS 31600 - Collaborative Leadership: Cross-Cultural Settings\n" +
    "EDPS 31700 - Collaborative Leadership: Mentoring\n" +
    "ENGL 20200 - Engaging English\n" +
    "ENGL 21700 - Figures Of Myth And Legend I: Monsters\n" +
    "ENGL 21800 - Figures Of Myth And Legends II: Heroes And Villains\n" +
    "ENGL 21900 - Figures Of Myth And Legend III: Magic And Marvels\n" +
    "ENGL 22300 - Literature And Technology\n" +
    "ENGL 22400 - Literature, Money, And Markets\n" +
    "ENGL 22500 - Literature, Inequality, And Injustice\n" +
    "ENGL 22600 - Narrative Medicine\n" +
    "ENGL 22800 - Language And Social Identity\n" +
    "ENGL 23000 - Great Narrative Works (satisfies Human Cultures Humanities for core)\n" +
    "ENGL 23200 - Thematic Studies In Literature Arab Women Writers, Arab-American Literature, Arabic Culture, Arabic Lit in Translation, Arthurian Literature: Medieval to Mod, Contemporary Foreign Women Writers, Dragons, German Folk & Fairy Tales, Intro to Islamic Civ & Cul, Italian Women Writers in Translation, Math, Science, & Literature, Nature in German Literature, Pirates!, Span Am Lit in Trans, The Novels of Stephen King, Tolkein, Vikings!, Women Writers in Translation, Interpreting the Play Script, Sports & Literature, Russian and Slavic Fairy&nbsp;Tales, Intro to Disability Studies, North African Lit & Culture)\n" +
    "ENGL 23400 - Literature And The Environment\n" +
    "ENGL 23500 - Introduction To Drama\n" +
    "ENGL 23700 - Introduction To Poetry\n" +
    "ENGL 23800 - Introduction To Fiction (satisfies Human Cultures Humanities for core)\n" +
    "ENGL 24000 - British Literature Before 1789\n" +
    "ENGL 24100 - British Literature After 1789\n" +
    "ENGL 24900 - Great British Books\n" +
    "ENGL 25000 - Great American Books (satisfies Human Cultures Humanities for core)\n" +
    "ENGL 25700 - Literature Of Black America\n" +
    "ENGL 25800 - Nobel Prize Winners In Literature\n" +
    "ENGL 26200 - Greek And Roman Classics In Translation\n" +
    "ENGL 26400 - The Bible As Literature\n" +
    "ENGL 26600 - World Literature: From The Beginnings To 1700 A.D.\n" +
    "ENGL 26700 - World Literature: From 1700 A.D. To The Present\n" +
    "ENGL 27600 - Shakespeare On Film (satisfies Human Cultures Humanities for core)\n" +
    "ENGL 27900 - The American Short Story In Print And Film\n" +
    "ENGL 28000 - Games, Narrative, Culture\n" +
    "ENGL 28600 - The Movies (satisfies Human Cultures Humanities for core)\n" +
    "ENGL 32200 - Word, Image, Media\n" +
    "ENGL 33000 - Games And Diversity\n" +
    "ENGL 33100 - Medieval English Literature\n" +
    "ENGL 33300 - Renaissance English Literature\n" +
    "ENGL 33500 - Restoration And Eighteenth-Century English Literature\n" +
    "ENGL 33700 - Nineteenth-Century English Literature\n" +
    "ENGL 33900 - Twentieth-Century British Literature\n" +
    "ENGL 34100 - Topics In Science, Literature, And Culture Exploring Nature, Genetic Engineering & Literature, Human Env & End of Nature, Lit & Scientific Paradigm - Honors, Literature, Nature and Travel, Oil & Water: Science, Literature, Disaster, Science Literature & Climate Change - Honors, The Invention of Nature, COVID Conspiracy Apocalyp Lit\n" +
    "ENGL 34200 - Legal Fictions\n" +
    "ENGL 34300 - Labor And Literature\n" +
    "ENGL 34400 - Environmental Ethics, Policy, And Sustainability\n" +
    "ENGL 34500 - Games And World Building\n" +
    "ENGL 35000 - American Literature Before 1865\n" +
    "ENGL 35100 - American Literature After 1865\n" +
    "ENGL 35200 - Native American Literature\n" +
    "ENGL 35400 - Asian American Literature\n" +
    "ENGL 35800 - Black Drama\n" +
    "ENGL 35900 - Black Women Writers\n" +
    "ENGL 36000 - Gender And Literature\n" +
    "ENGL 36500 - Literature And Imperialism\n" +
    "ENGL 36600 - Postcolonial Literatures\n" +
    "ENGL 36700 - Mystery And Detective Fiction\n" +
    "ENGL 37000 - Nineteenth-Century American Literature\n" +
    "ENGL 37100 - Twentieth-Century American Literature\n" +
    "ENGL 37300 - Science Fiction And Fantasy\n" +
    "ENGL 37700 - Modern And Contemporary Poetry\n" +
    "ENGL 37900 - The Short Story\n" +
    "ENGL 38100 - The British Novel\n" +
    "ENGL 38200 - The American Novel\n" +
    "ENGL 38600 - History Of Film To 1950\n" +
    "ENGL 38700 - History Of Film Since 1950\n" +
    "ENGL 38900 - Literature For Children\n" +
    "ENGL 39200 - Young Adult Literature\n" +
    "ENGL 39300 - Interdisciplinary Approaches To Environmental And Sustainability Studies\n" +
    "ENGL 39600 - Studies In Literature And Language African-American Protest Lit, Bad Film, Film Noir, Games, Narrative, & Culture, Latina/o Literature, Latina/o of the US, Living History, Maghrebi Literature & Culture, Spirit of Italian Comedy, Theories of Global Studies, Intro to Disability Studies, Games & Narrative, Games & World Building, Women & Games: Design Dev & Play, International Cinema, Language & Humor, Cinematic Shakespeare, Post Soul Black Lit Post 1960,&nbsp;Teaching for Social Justice\n" +
    "ENGL 41100 - Studies In Major Authors Hurston, Herman Melville, Jane Austen, Mark Twain, Octavia Butler, Tolkein, Toni Morrison, Virginia Woolf, W.E.B. Du Bois, William Faulkner, Zora Neale Hurston, Chaucer\n" +
    "ENGL 41200 - Studies In Genre Literary Modernism, American Women Poets, Black Satire and Humor, Black Speculative Fiction, The Literary Gothic, The Modern Novel, Twenty-First Century Novel, Twenty First Century Fiction, American Autobiography, American Short Story, Digital Humanities\n" +
    "ENGL 41300 - Studies In Literature And History Florence & the Renaissance, Beowulf to Shakespeare, Children’s Literature in Historical Perspective, Harlem Renaissance, History of the Book, Renaissance Mind: Florence 1250-1550, Studies in African Diaspora, Tudors in Literature & Film, Vikings and Literature, Tudors Queens in Lit & Film, Early American Networks, Lit in the Age of Eugenics,&nbsp;Gilded Age,&nbsp;The Heavens to Outer Space\n" +
    "ENGL 41400 - Studies In Literature And Culture New England Literary Journeys, 19th Century New England Literary Journey, Ecocritism, Science, and Lit, Environment Studies, Climate Change & Film, Literature and Disability, Literature and Disability: Deaf & Blind Culture, Postmodern Lit & Culture, The Black Male Image, The Hum & Higher Ed - Honors, The Nature of Nature, War, Terrorism, Globalization, and the Role of Literature, Witchcraft and Wonder in Early American Literature, Word, Image, Media, Sci & Wonder in Early Amer Lit\n" +
    "ENGL 43900 - Topics In Disability Studies Topics in Disability Studies: Bodies & Cultures, Disability in Fiction & Memoir, Eugenics Then & Now, Lit in the Age of Eugenics, Topics in Disability Studies\n" +
    "ENGL 44100 - Chaucer’s Canterbury Tales\n" +
    "ENGL 44200 - Shakespeare\n" +
    "ENGL 44400 - Milton\n" +
    "ENGL 46000 - Studies In Women’s Literature - (Modernist Women Writers, Studies in Women’s Literature)\n" +
    "ENGL 46200 - The Bible As Literature: The Old Testament\n" +
    "ENGL 46300 - The Bible As Literature: The New Testament\n" +
    "ENGL 46600 - Cultural Encounters\n" +
    "ENGL 52800 - Medieval English Literature\n" +
    "ENGL 53100 - The Rise Of The Novel\n" +
    "ENGL 53200 - The English Novel In The Nineteenth Century\n" +
    "ENGL 53400 - Seventeenth-Century Literature\n" +
    "ENGL 53500 - Restoration And Early Eighteenth-Century Literature\n" +
    "ENGL 53800 - English Drama From The Restoration To The Modern Period\n" +
    "ENGL 54100 - Studies In Chaucer’s Canterbury Tales\n" +
    "ENGL 54300 - Shakespeare In Critical Perspective\n" +
    "ENGL 54400 - Milton\n" +
    "ENGL 54700 - British Romanticism\n" +
    "ENGL 54800 - Victorian Literature\n" +
    "ENGL 55200 - Studies In Major American Authors\n" +
    "ENGL 55300 - Colonial And Early American Literature\n" +
    "ENGL 55400 - American Literary Culture 1820-1860\n" +
    "ENGL 55700 - Nineteenth-Century African-American Narrative\n" +
    "ENGL 55800 - American Literature In The Later Nineteenth Century\n" +
    "ENGL 56000 - Modern American Poetry\n" +
    "ENGL 57300 - Tragedy\n" +
    "ENGL 57900 - Modern British Fiction\n" +
    "ENGL 58300 - U S Ethnic/Multicultural Literature\n" +
    "ENGL 59200 - Postcolonial Studies Postcol & Globalization Studies, Postcolonial Lit of the City, Postcolonial Studies, PostCol Sts in End Times\n" +
    "ENGL 59300 - Contemporary British Fiction\n" +
    "ENGL 59400 - Contemporary Poetry\n" +
    "ENGL 59500 - Contemporary American Fiction\n" +
    "ENGL 59600 - Advanced Studies In Literature Or Language Bad Film, Environmental Ethics, Games & UX, Games, Narrative, & Culture, History of Alt Film Making, Modern Arab Thought, Mod Euro Rhetoric, Poetics, Narrative, Postculturalism, Stephen King’s Short Stories, The Continental Novel, Women&Games: Design Dev & Play, Young Adult Literature, Tragedy & Phil, Writing the Divine, Magic & Realism, Revolutionary Poetics, Philosophy & Lit Theory, American Poetry’s Great Debuts,&nbsp;Early American Networks,&nbsp;Literature for Children\n" +
    "ENGL 59700 - Contemporary Black Feminist Literature\n" +
    "ENTR 20000 - Introduction To Entrepreneurship And Innovation\n" +
    "ENTR 31000 - Marketing And Management For New Ventures\n" +
    "ENTR 47000 - Gender, Diversity And Leadership\n" +
    "FR 24100 - Introduction To The Study Of French Literature\n" +
    "FR 33000 - French Cinema (satisfies Human Cultures Humanities for core)\n" +
    "FR 34100 - French Literature I: From The Middle Ages To The Enlightenment\n" +
    "FR 34200 - French Literature II: The 19th And 20th Centuries\n" +
    "FR 38000 - Special Topics In French Culture And Civilization French Food Culture, Special Topics in French Culture and Civilization: La Gastronomie, Sport/Spectacle Berlin/Paris\n" +
    "FR 39400 - Special Topics In French Literature French Caribbean Literatures, Out of Africa\n" +
    "FR 44300 - Introduction To Francophone Literature\n" +
    "FR 48000 - French Civilization\n" +
    "FR 54100 - Renaissance French Literature\n" +
    "FR 54900 - French Literature And Film\n" +
    "FR 55800 - French Novel Of The Twentieth Century\n" +
    "FR 58100 - French Culture\n" +
    "FR 58200 - Francophone Cultures\n" +
    "FR 59400 - Special Topics In French Literature Conte Francais, Introduction to Francophone Literature, Litterature Quebecoise, The Continental Novel, Contemporary Fiction, French Caribbean Literature\n" +
    "FS 47000 - Wine Appreciation\n" +
    "FVS 49100 - Special Topics In Film/Video Studies Films of Martin Scorcese, Jewish Cinema, Mafia and The Movies, Terrorism & The Movies, Cinematic Shakespeare, Feminist Prsp on Film & Camera, Post-Soviet Russian Cinema,&nbsp;Spirit of Ital Comedy\n" +
    "GER 23000 - German Literature In Translation German Fairy Tales, German Folk & Fairy Tales, Myth, Legend, & Folklore, Myths & Legends: Elves to Elvis, Nature and the Environment in German Literature and Thought, Nature in German Literature, Supernatural & Uncanny Ger Lit, Vikings, Monsters, Grimm & God, A Brief History or Doom, German Lit in Translation (select courses satisfy Human Cultures Humanities for core)\n" +
    "GER 24100 - Introduction To The Study Of German Literature\n" +
    "GER 28000 - German Special Topics Beer and Brewing in German Culture\n" +
    "GER 33000 - German Cinema (satisfies Human Cultures Humanities for core)\n" +
    "GER 34100 - German Literature I: From The Middle Ages To The 18th Century\n" +
    "GER 34200 - German Literature II: From The 18th Century To The 21st Century\n" +
    "GER 48000 - German Civilization\n" +
    "GER 49800 - Advanced Topics In German  The Cultures of Fascism\n" +
    "GER 54400 - German Romanticism\n" +
    "GER 54500 - German Prose From Naturalism To The Present\n" +
    "GER 55100 - Lyric Poetry From Romanticism To The Present\n" +
    "GER 55400 - German Drama Before Naturalism\n" +
    "GER 55500 - German Drama From Naturalism To The Present\n" +
    "GER 58100 - German Culture\n" +
    "GER 59400 - Special Topics In German Literature Nietzsche: Literature & Values, Orientalism in German Literature, The Continental Novel, German Novelle\n" +
    "HDFS 21000 - Introduction To Human Development\n" +
    "HEBR 28400 - Ancient Near Eastern History And Culture\n" +
    "HEBR 38000 - Israel And The Modern World: Cinema, Literature, History And Politics\n" +
    "HIST 10300 - Introduction To The Medieval World (satisfies Human Cultures Humanities for core)\n" +
    "HIST 10400 - Introduction To The Modern World (satisfies Human Cultures Humanities for core)\n" +
    "HIST 10500 - Survey Of Global History (satisfies Human Cultures Humanities for core)\n" +
    "HIST 15100 - American History To 1877 (satisfies Human Cultures Humanities for core)\n" +
    "HIST 15200 - United States Since 1877 (satisfies Human Cultures Humanities for core)\n" +
    "HIST 20100 - Special Topics In History Ancient Judaism & Early Christianity, Ancient Near Eastern History & Culture, History of Globalization, History of the Military Art\n" +
    "HIST 21000 - The Making Of Modern Africa (satisfies Human Cultures Humanities for core)\n" +
    "HIST 21100 - The Global Field: World Soccer And Global History\n" +
    "HIST 22100 - History Behind The Headlines\n" +
    "HIST 22800 - English History To 1688\n" +
    "HIST 23800 - History Of Russia From Medieval Times To 1861 (satisfies Human Cultures Humanities for core)\n" +
    "HIST 23005 - Hitler’s Europe\n" +
    "HIST 23900 - History Of Russia From 1861 To The Present\n" +
    "HIST 24000 - East Asia And Its Historic Tradition (satisfies Human Cultures Humanities for core)\n" +
    "HIST 24100 - East Asia In The Modern World (satisfies Human Cultures Humanities for core)\n" +
    "HIST 24300 - South Asian History And Civilizations (satisfies Human Cultures Humanities for core)\n" +
    "HIST 24600 - Modern Middle East And North Africa (satisfies Human Cultures Humanities for core)\n" +
    "HIST 25000 - United States Relations With The Middle East And North Africa (satisfies Human Cultures Humanities for core)\n" +
    "HIST 27100 - Introduction To Colonial Latin American History (1492-1810) (satisfies Human Cultures Humanities for core)\n" +
    "HIST 27200 - Introduction To Modern Latin American History (1810 To The Present) (satisfies Human Cultures Humanities for core)\n" +
    "HIST 27800 - Money, Trade, And Power: The History Of Capitalism\n" +
    "HIST 30000 - Eve Of Destruction: Global Crises And World Organization In The 20th Century\n" +
    "HIST 30200 - Historical Topics African American Women’s Intellectual Tradition, Amer & Territorial Empire, America 1914-1945, America in the 1970’s, American Economic History, Ancient Judaism & Early Christianity, Arab-Isreali Conflict, Boxing in Culture, Conquistadors in Red, White, and Black, Controversies Contemp Korea, Creoles,Vampires,Quadroon Balls, Cultures of Beauty, Death, Disease & Medicine in 20th Century American History, Democracy and Education, Digital History, Flight Paths-Honors, Gender & Medieval Religion, Gender and War in the Time of Napoleon - Honors, Hamilton the Musical, History of Alchemy, History of Sports in America, History of U.S. Agriculture, History of US Presidential Debate, Hitler and Nazis, Imperial Spain 1469-1714, Introduction to Jewish Studies, Kennedy Assasination in Global Perspective, Korean History, Present-1945, Modern Warfare, Muslim Women in History, Nationalism and Socialism, Queens & Empresses, Race and Boxing, Religion in American History & Culture, Religion in American Society & Politics 1607-1877, Revolutions in the Atlantic World, ROMA History, Music & Culture, Sex, Race, and Science, Shakespeare’s Kings: The History Plays, Sports in America, Technology, Innovation, and the US Civil War, The Bible & its Early Interpreters, The Traveler’s Gaze, The US In The World, Warfare & Diplomacy, Youth in Revolutionary China, Black Pop Culture & Civil Rights, WWI and the Middle East, Afro-American Athletes & Race, Hitler’s Europe, Muslim Americans, Witchcraft & Magic in History, Brewing & The American Expr, Early Modern Madness, History of Ireland: 1556-1921, Modern Korean History, American Colonies, Global 1960s Revolution, Global Hist Theory & Practice, AA Athletes & Problem of Race\n" +
    "HIST 30305 - Food In Modern America\n" +
    "HIST 30400 - America In The 1960s (satisfies Human Cultures Humanities for core)\n" +
    "HIST 30505 - The United States In The World 1898-Present (satisfies Human Cultures Humanities for core)\n" +
    "HIST 30605 - Technology And War In U.S. History\n" +
    "HIST 31005 - The Civil War And Reconstruction, 1850 To 1877\n" +
    "HIST 31205 - The Arab-Israeli Conflict\n" +
    "HIST 31305 - Medical Devices And Innovation\n" +
    "HIST 31405 - Science, Technology, Engineering And Mathematics (STEM) And Gender\n" +
    "HIST 31505 - American Beauty\n" +
    "HIST 31700 - A History Of The Christian Church And The Expansion Of Christianity I\n" +
    "HIST 31800 - A History Of The Christian Church And The Expansion Of Christianity II\n" +
    "HIST 31905 - Christianity In The Global Age\n" +
    "HIST 32105 - Spain: The First Global Empire, 1469-1713\n" +
    "HIST 32300 - German History (satisfies Human Cultures Humanities for core)\n" +
    "HIST 32400 - Modern France (satisfies Human Cultures Humanities for core)\n" +
    "HIST 32501 - Twentieth Century Europe Through Autobiography\n" +
    "HIST 32900 - History Of Women In Modern Europe\n" +
    "HIST 33205 - The Nuclear Age\n" +
    "HIST 33300 - Science And Society In Western Civilization I\n" +
    "HIST 33400 - Science And Society In Western Civilization II\n" +
    "HIST 33505 - Nationalism And Socialism In East Central Europe\n" +
    "HIST 33700 - Europe In The Age Of The Cold War\n" +
    "HIST 33805 - History Of Human Rights\n" +
    "HIST 33900 - Traditional China\n" +
    "HIST 34000 - Modern China (satisfies Human Cultures Humanities for core)\n" +
    "HIST 34300 - Traditional Japan\n" +
    "HIST 34400 - History Of Modern Japan (satisfies Human Cultures Humanities for core)\n" +
    "HIST 34505 - Arabs in American Eyes\n" +
    "HIST 34705 - History Of Religion In America\n" +
    "HIST 34901 - The First World War\n" +
    "HIST 35000 - Science And Society In The Twentieth Century World\n" +
    "HIST 35100 - The Second World War (satisfies Human Cultures Humanities for core)\n" +
    "HIST 35205 - Death, Disease And Medicine In Twentieth Century American History\n" +
    "HIST 35305 - Sports In America\n" +
    "HIST 35400 - Women In America To 1870 (satisfies Human Cultures Humanities for core)\n" +
    "HIST 35500 - History Of American Military Affairs\n" +
    "HIST 35900 - Gender In East Asian History (satisfies Human Cultures Humanities for core)\n" +
    "HIST 36305 - The History Of Medicine And Public Health\n" +
    "HIST 36600 - Hispanic Heritage Of The United States\n" +
    "HIST 37005 - Queens And Empresses In Early Modern Europe\n" +
    "HIST 37100 - Society, Culture, And Rock And Roll (satisfies Human Cultures Humanities for core)\n" +
    "HIST 37200 - History Of The American West\n" +
    "HIST 37500 - Women In America Since 1870 (satisfies Human Cultures Humanities for core)\n" +
    "HIST 37600 - History Of Indiana\n" +
    "HIST 37700 - History And Culture Of Native America\n" +
    "HIST 38001 - History Of United States Agriculture (satisfies Human Cultures Humanities for core) (satisfies Science, Technology and Society for core)\n" +
    "HIST 38200 - American Constitutional History (satisfies Human Cultures Humanities for core)\n" +
    "HIST 38300 - Recent American Constitutional History (satisfies Human Cultures Humanities for core)\n" +
    "HIST 38400 - History Of Aviation\n" +
    "HIST 38505 - Media, Politics And Popular Culture\n" +
    "HIST 38605 - Land Of The Indians: Native Americans In Indiana\n" +
    "HIST 38700 - History Of The Space Age\n" +
    "HIST 39400 - Environmental History Of The United States (satisfies Human Cultures Humanities for core)\n" +
    "HIST 39500 - Junior Research Seminar 1960s America, Air & Space: The Technology & Culture of Flight, Children’s Literature, Conspiracy & Conspiracy Theory, Cultural Studies Children’s Literature, Discover Your Roots, Gender and Politics, Gender & War in Modern Europe, German-Occupied Europe, Global History of Oceans, Hist of Medicine in Archives, History & Memory, History as Conspiracy, History of Human Rights, History of Race and Law, Indian Crossroads-Colonial City, Magic, Science, Faith, Medicine & Public Health in US, Misfits Castoffs Colonial Amer, Occupied Europe, Politics and Culture in Cold War America: The 1950s, Politics Mod Latin America, Politics of Popular Culture 20th Century U.S., Pop Culture Goes to War, Race And The Law In The U S, Sovereign Nations of Southwest, The Civil Rights Movement, The Gender Revolution in Modern America, The Global Cold War, The Politics of Popular Culture in 20th Century US, Witches, Wenches & Pirates, Women’s Voices in Early Modern Europe, Writing Global American History, Foods, Fads & Fitness in America, Afro Amer Athl & Civil Rights, Dynasties & Intl Politics, The Moon Race, Roots of the Climate Crisis, American Environmental Hist, Purdue Changemakers:1940-2000, Capitalism&Democracy Erly Amer, America in the 1980s, Human Rights, Nrthn Indian Removal 1783-1850\n" +
    "HIST 39600 - African American History To 1877 (satisfies Human Cultures Humanities for core)\n" +
    "HIST 39800 - African American History Since 1877 (satisfies Human Cultures Humanities for core)\n" +
    "HIST 40000 - Great Books And The Search For Meaning\n" +
    "HIST 40300 - Europe In The Reformation\n" +
    "HIST 40500 - The French Revolution And Napoleon\n" +
    "HIST 40600 - Rebels And Romantics: Europe 1815-1870\n" +
    "HIST 40700 - Road To World War I: Europe 1870-1919\n" +
    "HIST 40800 - Dictatorship And Democracy: Europe 1919-1945\n" +
    "HIST 41005 - History Of The American Presidency\n" +
    "HIST 41300 - Modern European Imperialism: Repression and Resistance\n" +
    "HIST 41505 - Gender And Politics In Early Modern Europe\n" +
    "HIST 41800 - European Society And Culture 1450-1800\n" +
    "HIST 42300 - Advanced Topics In Modern Germany Divided Germany, German Business History, Germany & France: War, Peace & Memry\n" +
    "HIST 43900 - Communist China\n" +
    "HIST 44100 - Africa In The Twentieth Century\n" +
    "HIST 46000 - American Colonial History\n" +
    "HIST 46100 - The Revolutionary Era, 1763 To 1800\n" +
    "HIST 46700 - The Emergence Of Modern America\n" +
    "HIST 46800 - Recent American History\n" +
    "HIST 46900 - Black Civil Rights Movement\n" +
    "HIST 47005 - Women And Health In America\n" +
    "HIST 47300 - History Of The South\n" +
    "HIST 47600 - The Civil War In Myth And Memory\n" +
    "HIST 47700 - Native American Women’s History\n" +
    "HIST 48005 - Madness And The Asylum In The United States\n" +
    "HIST 48500 - Topics In American Political History History of Pres Comm, The American Presidency, Work & Labor in Modern America\n" +
    "HIST 48800 - History Of Sexual Regulation In The United States\n" +
    "HIST 49200 - Seminar In Historical Topics 18th-Century Pacific Worlds, Afro American & Amer Labor Movement, Americans in the World, Catholic Priests & Nuns Movies, Gauchos and Cowboys on the Argentine Frontier, Gender, Science & Technology, Great Trials in History, History Of Argentina, History of Argentina 1810-Present, Jefferson to Turner, Late Imperial China, Life & Career of Winston Churchill, Race, Gender, Culture US - Honors, Refuges and Statelessness, Slavery & Freedom in Fact, Fiction, and Film, Southern History at the Movies, Spain Under the Habsburgs, The Confederacy Hist & Myth, US Imperialism, Women and Health in America\n" +
    "HIST 49500 - Research Seminar In Historical Topics 1960s America, American Foreign Relations, American Imperialism, American Missionaries in East Asia, Autobiographies & Memoirs, Chilies to Chocolate: How the Americas Changed the World, Com at the Dawn of the Republic, Flight and Space, Gender Revolution in Modern American, History of Madness and the Asylum, Indian Removal 19th Cent US, Interwar Jewish Experiences in E. Central Europe, Russia, and Middle East, Madness and the Asylum, Modern Civil Rights Movement, Native America and Colonial Settlement, Persistent Myths in Amer Hist, Pol & Popular Music:1945-1969, Politics & Popular Culture of Cold War America-Honors, Rel & Pol In Mid Amer, Sectional Crisis And American Civil War, Seminar on Native America, Spain in American Southwest, The Age of Elvis: America in the 1950’s, Trials and History, War and Gender, Witchcraft & Magic, Women Modern America 1950-Pres, Medicine and Madness, Rights & Revolution Eur & America, Race & Civil Rights Movmnt, Psychedlic Pscyhiatry, Modern US Protest Movements, Native American History, Decolonization and After, Famine in World History, Gender and War, World War I in the Middle East,&nbsp;Race & Modern Civil Rights,&nbsp;Writing the Age of Revolutions\n" +
    "HIST 50000 - Studies In Medieval History\n" +
    "HIST 51200 - England Under The Stuarts\n" +
    "HIST 54800 - Conflict In East Asia: Twentieth Century\n" +
    "HIST 57600 - Problems In Latin American History\n" +
    "HIST 59500 - The Holocaust And Genocide\n" +
    "HONR 19900 - Interdisciplinary Honors - Introductory Seminar - (Beyond Afghanistan)\n" +
    "HONR 29900 - Interdisciplinary Honors - Experiential Learning - (Underground Networks)\n" +
    "HONR 39900 - Interdisciplinary Honors - Special Topics Seminar  (Human Redesign Calendar, Beyond Afghanistan)\n" +
    "IDIS 49100 - Special Topics In Interdisciplinary Studies Arab Women Writers, Arabic Culture, British Literature, Cultural Encounters, Cultural Orphans in Latin America, Evolutn of Bible Revol Effcts, Gender & Medieval Religion, Ghosts in Global Culture, Intro to Islamic Civ & Cul, Jewish Cinema, Milton, Muslim Women in History, Muslims in America, Myth, Legend, & Folklore, Myths & Legends: Elves to Elvis, Race & Religion in the US, Religion & Violence, The Icelandic Saga, Two Koreas: Pol Econ Rivalry, Women Writers in Translat, Intro to Global Urban Envrnmnt,&nbsp;German Literature in Translation\n" +
    "IDIS 59100 - Selected Topics In Interdisciplinary Studies Seventeenth Century Lit, The Continental Novel, Bible & Early Inerpret\n" +
    "ILS 23000 - Data Science And Society: Ethical Legal Social Issues\n" +
    "ITAL 23100 - Dante’s Divine Comedy\n" +
    "ITAL 28100 - The Italian Renaissance And Its Scientific And Cultural Impact On Western Civilization (satisfies Human Cultures Humanities for core)\n" +
    "ITAL 33000 - The Italian Cinema (satisfies Human Cultures Humanities for core)\n" +
    "ITAL 33300 - The Spirit Of Italian Comedy (satisfies Human Cultures Humanities for core)\n" +
    "ITAL 33500 - Italian-American Cinema\n" +
    "ITAL 34100 - Italian Literature I: From The Middle Ages To The Enlightenment\n" +
    "ITAL 34200 - Italian Literature II: From Romanticism To The Present\n" +
    "ITAL 39300 - Special Topics In Italian Literature Or Cinema Italian Fashion: History, Italian Women Writers in Translation, La Dolce Vita: Italian Food, Mafia and The Movies, The Films of Martin Scorcese, The Cultures of Facism\n" +
    "ITAL 49300 - Advanced Topics In Italian Literature Or Cinema - (Mafia & the Movies)\n" +
    "JPNS 24100 - Introduction To The Study Of Japanese Literature\n" +
    "JPNS 28000 - Introduction To Modern Japanese Civilization\n" +
    "JPNS 33000 - Japanese Cinema\n" +
    "JPNS 34100 - Japanese Literature I: Modern Japanese Literature\n" +
    "JPNS 48000 - Japanese Civilization\n" +
    "JPNS 48500 - Culinary Culture Of Japan\n" +
    "JPNS 49000 - Special Topics In Japanese Language Contemporary Japanese Popular Literature & Culture, Japanese Culinary Culture, JPNS B Movies Document Films, JPNS Cinema II: Enter & Othr Fm, Modern JPNS Masterpiece Novels, Japanese Visual Culture, Japanese Songs,&nbsp;Japanese Society Through Songs\n" +
    "JPNS 54300 - Modern Japanese Popular Literature And Culture\n" +
    "JPNS 59400 - Special Topics In Japanese Literature Contemp JPNS Women Writers, Modern Japanese Fiction, The Continental Novel\n" +
    "JWST 33000 - Introduction To Jewish Studies (satisfies Human Cultures Humanities for core)\n" +
    "KOR 38000 - Special Topics In Korean Culture Dating, Sex & Marriage - Korea\n" +
    "LALS 25000 - Introduction To Latin American And Latino Studies\n" +
    "LALS 26000 - U S Latino Culture\n" +
    "LALS 30100 - Latin American Literary And Cultural Studies\n" +
    "Hispanic Lit I\n" +
    "LALS 40100 - Special Topics In Latin American/Latino Studies\n" +
    "Latin Amer Civiliztn, Latin American Culture, Latina Feminisms\n" +
    "LALS 49500 - Humanigration: A Border Experience\n" +
    "LATN 34300 - Roman Oratory\n" +
    "LATN 34400 - Roman Epic\n" +
    "LATN 34500 - Roman Elegy\n" +
    "LATN 34700 - Roman Comedy\n" +
    "LATN 44300 - Roman Satire\n" +
    "LATN 44400 - Roman Philosophers\n" +
    "LALS 26000 - U S Latino Culture\n" +
    "LATN 44600 - Roman Historians\n" +
    "LATN 49000 - Directed Reading In Latin - (Latin Paleography)\n" +
    "LATN 59000 - Directed Reading In Latin - (Latin Paleography)\n" +
    "LC 23000 - Crossing Borders: Introduction To Comparative Literature  Intro to Islami Civ & Cul, Introduction To Comparative Literature, World Lit 1700 to Now\n" +
    "LC 23100 - Fairytale, Folktale, Fable\n" +
    "LC 23300 - Love, Sex, And Gender In Western European Literature\n" +
    "LC 23500 - East Asian Literature In Translation\n" +
    "LC 23700 - Our Common Bond: Languages And Cultures In A Global Context\n" +
    "LC 23900 - Women Writers In Translation Women Writers in Translation, Contemporary Foreign Women Writers in Translation, French Women Writers in Translation - Honors, Italian Women Writers in Translation(select courses satisfy Human Cultures Humanities for core)\n" +
    "LC 33100 - Comparative Literature In Translation - (Kabbalah and Jewish Mysticism, Topics in Brazilian Culture)\n" +
    "LC 33300 - The Middle Ages On Film (satisfies Human Cultures Humanities for core)\n" +
    "LC 33800 - Language Through Films\n" +
    "LC 49000 - Special Topics In Foreign Languages And Literatures History of Chinese Art, Jewish Cinema, Leo Tolstoy His World and Art, Terrorism & The Movies, BTS and Kpop Culture, Bible & Early Interp, The Cultures of Facism, The Hispanic World,&nbsp;Cold War Cultures in Korea,&nbsp;Tolstoy and His Age\n" +
    "LC 59300 - Special Topics In Literature Dostoevsky and His Age, Leo Tolstoy His World and Art, Mod Europ Narratv Theory Pract, Modern Arab Thought, ModEuroRhetorc,Poetcs,Narrativ, Nietzsche: Literature & Values, Stephen King’s Short Stories, The Continental Novel, The Icelandic Saga, Theory of Creativity, Approaches to Narrative, Don Quixote and Cervantes, Borders and Borderlands, Tolstoy and His World\n" +
    "MARS 22000 - Introduction To Medieval And Renaissance Studies Dragons, Arthurian Literature: Medieval to Modern, Love, Sex, and Gender in Western European Literature, Middle Ages on Film, Pirates!, The Tudors, Vikings!\n" +
    "MARS 42000 - Medieval And Renaissance Studies Seminar Beowulf to Shakespeare, Chaucer’s Troilus, Renaissance Mind: Florence 1300-1600, The Bible as Literature: The New Testament, Tudors in Literature and Film\n" +
    "MGMT 20000 - Introductory Accounting\n" +
    "MGMT 21200 - Business Accounting\n" +
    "MGMT 24200 - Contemporary Problems In Personal Finance For Minorities\n" +
    "MGMT 24300 - Contemporary Thought Of Minorities In Management\n" +
    "MGMT 32300 - Principles Of Marketing\n" +
    "MGMT 32400 - Marketing Management\n" +
    "MGMT 45500 - Legal Background For Business I\n" +
    "MUS 25000 - Music Appreciation (satisfies Human Cultures Humanities for core)\n" +
    "MUS 37500 - Selected Topics In Music Beethoven, Brahms, Celebratory Baroque Music, Mozart, The Music of Handel, World Music\n" +
    "MUS 37600 - World Music\n" +
    "MUS 37800 - Jazz History (satisfies Human Cultures Humanities for core)\n" +
    "MUS 38100 - Music History I: Antiquity To Mozart\n" +
    "MUS 38200 - Music History II: Beethoven To The Present\n" +
    "MUS 49000 - Guided Reading In Music  (History of Rock Music)\n" +
    "NS 21300 - Sea Power And Maritime Affairs\n" +
    "OBHR 33000 - Introduction To Organizational Behavior\n" +
    "PHIL 11000 - The Big Questions: Introduction to Philosophy (satisfies Human Cultures Humanities for core)\n" +
    "PHIL 11100 - Introduction To Ethics (satisfies Human Cultures Humanities for core)\n" +
    "PHIL 11400 - Global Moral Issues (satisfies Human Cultures Humanities for core)\n" +
    "PHIL 12000 - Critical Thinking (satisfies Human Cultures Humanities for core)\n" +
    "PHIL 20600 - Introduction To Philosophy Of Religion\n" +
    "PHIL 20700 - Ethics For Technology, Engineering, And Design\n" +
    "PHIL 20800 - Ethics Of Data Science\n" +
    "PHIL 21900 - Philosophy And The Meaning Of Life\n" +
    "PHIL 22100 - Introduction To Philosophy Of Science\n" +
    "PHIL 22300 - Fate And Free Will\n" +
    "PHIL 22500 - Philosophy And Gender\n" +
    "PHIL 23000 - Religions Of The East (satisfies Human Cultures Humanities for core)\n" +
    "PHIL 23100 - Religions Of The West (satisfies Human Cultures Humanities for core)\n" +
    "PHIL 24000 - Social And Political Philosophy\n" +
    "PHIL 24200 - Philosophy, Culture, And The African American Experience\n" +
    "PHIL 26000 - Philosophy And Law (satisfies Information Literacy for core)(satisfies Written Communication for core)\n" +
    "PHIL 27000 - Biomedical Ethics (satisfies Science, Technology and Society for core)\n" +
    "PHIL 27500 - The Philosophy Of Art\n" +
    "PHIL 28000 - Ethics And Animals (satisfies Human Cultures Humanities for core)\n" +
    "PHIL 29000 - Environmental Ethics (satisfies Human Cultures Humanities for core)\n" +
    "PHIL 29300 - Selected Topics In Philosophy Global Ethics, Philosophy of Disability, Science and Religion\n" +
    "PHIL 30100 - History Of Ancient Philosophy\n" +
    "PHIL 30200 - History Of Medieval Philosophy\n" +
    "PHIL 30300 - History Of Modern Philosophy\n" +
    "PHIL 30400 - Nineteenth-Century Philosophy\n" +
    "PHIL 30600 - Twentieth-Century Philosophy\n" +
    "PHIL 32200 - Philosophy Of Technology\n" +
    "PHIL 40200 - Studies In Medieval Christian Thought\n" +
    "PHIL 40600 - Intermediate Philosophy Of Religion\n" +
    "PHIL 41100 - Modern Ethical Theories\n" +
    "PHIL 42100 - Philosophy Of Science\n" +
    "PHIL 42400 - Recent Ethical Theory\n" +
    "PHIL 42500 - Metaphysics\n" +
    "PHIL 43200 - Theory Of Knowledge\n" +
    "PHIL 43500 - Philosophy Of Mind\n" +
    "PHIL 46500 - Philosophy Of Language\n" +
    "PHIL 49000 - Advanced Topics In Philosophy Early Greek Philosophy, Ethics and Philosophy of Info, Minds and Morals, Personal Identity, Moral Psych & Environment, Philosophy of Race)\n" +
    "PHIL 50100 - Studies In Greek Philosophy\n" +
    "PHIL 50200 - Studies In Medieval Philosophy\n" +
    "PHIL 50300 - Studies In Early Modern Philosophy\n" +
    "PHIL 50500 - Islamic And Jewish Philosophy And The Classical Tradition\n" +
    "PHIL 50600 - Advanced Philosophy Of Religion\n" +
    "PHIL 50700 - Recent American Philosophy\n" +
    "PHIL 51000 - Phenomenology\n" +
    "PHIL 51400 - Twentieth-Century Analytical Philosophy I\n" +
    "PHIL 51500 - Twentieth-Century Analytical Philosophy II\n" +
    "PHIL 52000 - Existentialism\n" +
    "PHIL 52400 - Contemporary Ethical Theory\n" +
    "PHIL 52500 - Studies In Metaphysics\n" +
    "PHIL 53000 - Deconstructionist And Postmodernist Philosophy\n" +
    "PHIL 53200 - Studies In Theory Of Knowledge\n" +
    "PHIL 53500 - Studies In Philosophy Of Mind\n" +
    "PHIL 54000 - Studies In Social And Political Philosophy\n" +
    "PHIL 54500 - Recent Analytic Philosophy\n" +
    "PHIL 55100 - Philosophy Of The Natural Sciences\n" +
    "PHIL 55200 - Philosophy Of The Social Sciences\n" +
    "PHIL 55500 - Critical Theory\n" +
    "PHIL 56200 - Reading To Argue\n" +
    "PHIL 58000 - Proseminar In Philosophy Metalogic, Philosophy of Liberation, Proseminar in Philosophy, Laws/Causes, Phil Race, Imagination and Literature, Modern Arab Thought\n" +
    "PHPR 49000 - Special Topics - (Traditnl Chns Med In Shanghai)\n" +
    "POL 10100 - American Government And Politics (satisfies Behavioral/Social Science for core)\n" +
    "POL 12000 - Introduction To Public Policy And Public Administration (satisfies Behavioral/Social Science for core)\n" +
    "POL 13000 - Introduction To International Relations (satisfies Behavioral/Social Science for core)\n" +
    "POL 14100 - Governments Of The World\n" +
    "POL 15000 - Introduction To Political Thought\n" +
    "POL 20000 - Introduction To The Study Of Political Science\n" +
    "POL 22200 - Women, Politics, And Public Policy (satisfies Behavioral/Social Science for core)\n" +
    "POL 22300 - Introduction To Environmental Policy (satisfies Behavioral/Social Science for core)  (satisfies Science, Technology and Society for core)\n" +
    "POL 22800 - Data Science And Public Policy\n" +
    "POL 22900 - Emerging Problems In Political Science Global Habitats, Cmnty Dev & Sust, Terrorism, The US, Cuba & Latin America, Social and Political Philosophy, State Borders and Disputes, Data Science and Public Policy, Spies and Lies\n" +
    "POL 23000 - Introduction To The Study Of Peace (satisfies Behavioral/Social Science for core)\n" +
    "POL 23100 - Introduction To United States Foreign Policy (satisfies Behavioral/Social Science for core)\n" +
    "POL 23500 - International Relations Among Rich And Poor Nations (satisfies Behavioral/Social Science for core)\n" +
    "POL 23700 - Modern Weapons And International Relations  (satisfies Science, Technology and Society for core)\n" +
    "POL 30000 - Introduction To Political Analysis (satisfies Information Literacy for core)\n" +
    "POL 31400 - The President And Policy Process\n" +
    "POL 32300 - Comparative Environmental Policy\n" +
    "POL 32600 - Black Political Participation In America\n" +
    "POL 32700 - Global Green Politics\n" +
    "POL 33500 - China And The Challenges Of Globalization\n" +
    "POL 34500 - West European Democracies In The Post-Industrial Era\n" +
    "POL 34700 - Introduction To Latin American Politics\n" +
    "POL 34800 - East Asian Politics\n" +
    "POL 35100 - Foundations Of Western Political Theory: From Plato To The Reformation\n" +
    "POL 35300 - Current Political Ideologies\n" +
    "POL 36000 - Women And The Law\n" +
    "POL 37200 - Indiana Government And Politics\n" +
    "POL 37300 - Campaigns And Elections\n" +
    "POL 41000 - Political Parties And Politics\n" +
    "POL 41100 - Congress: Structure And Functioning\n" +
    "POL 41300 - The Human Basis Of Politics\n" +
    "POL 41500 - US Politics And The Media\n" +
    "POL 42300 - International Environmental Policy\n" +
    "POL 42500 - Environmental Law And Politics\n" +
    "POL 42800 - The Politics Of Regulation\n" +
    "POL 42900 - Contemporary Political Problems Am Political Communication, Am Presidents & Com With Cspan, Bioethics, Building Democratic Institution, Community Resilience, CSPAN:Com Democracy Thru Media, Digital Democracy, Food Policy-Honors, Health, Sustainability, & the Built Environment, Issues/Interviews w/Brian Lamb, It’s a Complex World, Media Influe Conflit Envir, Model United Nations, Political Communication, Politics and Media, Politics Media & Pres Elect, Public Opinion & Elections, Public Opinion Polling, Science Technology and Policy, Supreme Ct & Const Law, The Politics of NASCAR Nation, Contemporary Political Problems, Intro to Nuc & Rad Security, Understand Fed Sci Pol & F, LGBTQ+ Politics,&nbsp;Black Women in Politics,&nbsp;Modeling for Public Policy,&nbsp;Pres COM in Election Yr\n" +
    "POL 43000 - Selected Problems In International Relations Bargaining & Diplomacy, Causes & Consequences of War, International Human Rights, IR: The Iraq Wars, Selected Problems in International Relations, Theories of IR, War, Public Opinion, and US Foreign Policy, Spies & Lies Studies Intel & Secur, Nation-building and War, Conf & Devl: US in Afghanistan, Terrorism and Intl Security, Select Topics In Diplomacy,&nbsp;Terrorism and Intl Security\n" +
    "POL 43200 - Selected Problems In World Order - (Selected Problems in World Order: Human Transformations)\n" +
    "POL 43300 - International Organization\n" +
    "POL 43500 - International Law\n" +
    "POL 46000 - Judicial Politics\n" +
    "POL 46100 - Constitutional Law I\n" +
    "POL 46200 - Constitutional Law II\n" +
    "POL 43801 - International Human Rights\n" +
    "POL 49100 - Political Science Senior Seminar American Race Relations, Contemporary Political Problems, Contemporary Power Relations, Democracy & Democratization, Democracy & Its Critics, Environmental Federalism, Hard Decisions, Health Care Policy and Politics, International Cooperation, Moving Across Borders, NIMBY Politics, Parliamnts Promote Demcrcy?, Power and Interest, Power, Bargaining, & Conflict, Public Opinion & Elections, Public Policy: Race, Class, Gender, Race, Class and Political Representation, Race, Gender & Political Representation, Southern Politics, SrSemr Congress Age of TV, SrSemr Conservatism, SrSemr Demcrcy & Critics, Terrorism And Media, The Iraq Wars, Comp Pol of Renewable Energy, Powers & International Order, Senior Seminar Env Policy, Politics of Japan and China, The Rise and Fall of Dictators, Global Governance, Conservativism&US Foreign Policy, The Politics of Immigration,&nbsp;Con Law Death Pen & Privacy\n" +
    "POL 49300 - Interdisciplinary Undergraduate Seminar Data Driven Apprch/Polcy Mking, Introduction to Jewish Studies, Seminar in Global Policy Issues\n" +
    "POL 51700 - The Politics Of Capital And Labor In The United States\n" +
    "POL 52000 - Special Topics In Public Policy Policy Analysis Climate Change, Gender, Race, and Class: Public Policy, Health, Built Env & Sustain, Race Ethnicity Representation, World Food Problems, Nuclear Strategy/Proliferation, Dem Deliberation Participation, Diversity Equity Inclusion\n" +
    "POL 52300 - Environmental Politics And Public Policy\n" +
    "POL 52400 - Public Policy And The Family\n" +
    "POL 53200 - Nuclear Strategy And Proliferation\n" +
    "POL 59000 - Directed Reading In Political Science\n" +
    "PSY 12000 - Elementary Psychology\n" +
    "PSY 20000 - Introduction To Cognitive Psychology\n" +
    "PSY 22200 - Introduction To Behavioral Neuroscience\n" +
    "PSY 23500 - Child Psychology\n" +
    "PSY 23900 - The Psychology Of Women\n" +
    "PSY 24000 - Introduction To Social Psychology\n" +
    "PSY 24400 - Introduction To Human Sexuality\n" +
    "PSY 27200 - Introduction To Industrial-Organizational Psychology\n" +
    "PSY 29200 - Topics In Psychology Intro to Clinical Psych, Intro to Neuropsychology, Neurobiology of Disease, Science of Well Being\n" +
    "PSY 31000 - Sensory And Perceptual Processes\n" +
    "PSY 31100 - Human Memory\n" +
    "PSY 31400 - Introduction To Learning\n" +
    "PSY 32700 - Psychology Of Helping\n" +
    "PSY 32400 - Introduction Cognitive Neuroscience\n" +
    "PSY 33500 - Stereotyping And Prejudice\n" +
    "PSY 33600 - Issues In Developmental Psychology\n" +
    "PSY 33700 - Social Cognition\n" +
    "PSY 34200 - Introduction To Psychology Of Personality\n" +
    "PSY 35000 - Abnormal Psychology\n" +
    "PSY 35200 - Introduction To Neuropsychology\n" +
    "PSY 35400 - Close Relationships\n" +
    "PSY 36100 - Human Development I: Infancy And Childhood\n" +
    "PSY 36700 - Adult Development And Aging\n" +
    "PSY 37600 - Attention And Cognitive Control\n" +
    "PSY 38000 - Behavior Change Methods\n" +
    "PSY 39200 - Special Topics In Psychology Attention & Cognitive Control, Close Relationships, Foods and Behavior, Language & The Brain, Neurobiology of Disease, Neurodevelopmental Disorders, Neuroscience, Alchohol Abuse & Alchoholism, Parapsyc & Psychic Claims, Psychology of Emotions, Psychology of Helping, Research Ethics in Psychology, Robot & Human Vision, Science of Happiness, Social Cognition, Social Image And Self-Identity, Social Psychology & Film, Social Psychology of Film-Honors, Understanding Autism, Diversity and Inclusion, Cognitive Neurosci of Vision, Psychology of Trauma, Eating Disorderes & Obesity,&nbsp;Lifespan Development,&nbsp;Intro to Clinical Psychology,&nbsp;Beh/Neural Sys Learn & Mem\n" +
    "PSY 41800 - Understanding Autism\n" +
    "PSY 42100 - Alcohol Use And Disorders\n" +
    "PSY 42200 - Genes and Behavior\n" +
    "PSY 42600 - Language Development\n" +
    "PSY 42800 - Drugs And Behavior\n" +
    "PSY 42900 - Hormones And Behavior\n" +
    "PSY 43200 - Social Psychology In Film\n" +
    "PSY 43600 - Foods And Behavior\n" +
    "PSY 43800 - Introduction To Clinical Psychology\n" +
    "PSY 44300 - Aggression And Violence\n" +
    "PSY 46400 - Research Ethics In Psychological Sciences\n" +
    "PSY 47300 - Selection And Performance Appraisal In Organizations\n" +
    "PSY 47500 - Work Motivation And Job Satisfaction\n" +
    "PSY 48400 - The Psychology Of Consciousness\n" +
    "PSY 51500 - Neuroscience Of Consciousness\n" +
    "PSY 54000 - History Of Psychology\n" +
    "PSY 56100 - Personality And Social Functioning In Older Adults\n" +
    "PSY 59100 - Topics In Psychology Cross Cultural Social Psy, Current Readings in Social Psychology, Developmental Cognitive Neuroscience, Ethnic Minority Issues in Psy, Evolutionary Cognitive Psychology, Hormones & Behavior, Intro to Compu/Cog Neurosci, Neuroethics, Neuroscience of Consciousness, Acceptance and Inclusion, Foundations of Clinical Psych, Ostracism\n" +
    "PTGS 33000 - Brazilian, Portuguese, And African Cinema\n" +
    "PTGS 55100 - Brazilian Poetry\n" +
    "PTGS 55500 - Brazilian Drama\n" +
    "PTGS 55700 - Brazilian Fiction\n" +
    "PTGS 59400 - Special Topics In Luso-Brazilian Literature Latin American Short Story, Clarice Lispector, Luso-Brazillian Literature, Machado De Assis, Machado & Borges\n" +
    "REL 20000 - Introduction To The Study Of Religion (satisfies Human Cultures Humanities for core)\n" +
    "REL 20100 - Interpretation Of The New Testament\n" +
    "REL 20200 - Interpretation Of The Old Testament\n" +
    "REL 20300 - Theology Of Paul\n" +
    "REL 20400 - Introduction To Christian Theology\n" +
    "REL 23000 - Religions Of The East (satisfies Human Cultures Humanities for core)\n" +
    "REL 23100 - Religions Of The West (satisfies Human Cultures Humanities for core)\n" +
    "REL 25000 - A History Of The Christian Afterlife\n" +
    "REL 31700 - Ancient Judaism And Early Christianity\n" +
    "REL 31800 - The Bible And Its Early Interpreters\n" +
    "REL 35000 - History Of Christian Theology\n" +
    "REL 35100 - Christian Mysticism\n" +
    "REL 45000 - Christian Ethics\n" +
    "REL 45100 - Christology\n" +
    "REL 45200 - Systematic Theology\n" +
    "RUSS 29800 - Special Topics In Russian Russian Fairy Tales, Russian and Slavic Fairy Tales\n" +
    "RUSS 33000 - Russian And East European Cinema (satisfies Human Cultures Humanities for core)\n" +
    "RUSS 34100 - Russian Literature In The Nineteenth Century\n" +
    "RUSS 34200 - Revolution, Repression, Renewal: Soviet Literature And Beyond\n" +
    "RUSS 38000 - Russian Culture And Civilization I\n" +
    "RUSS 38100 - Russian Culture And Civilization II\n" +
    "RUSS 48000 - Russian Civilization\n" +
    "RUSS 49700 - Topics In Russian Literature  Dostoevsky and His Age, Tolstoy and His Age\n" +
    "RUSS 49800 - Topics In Russian Culture Post-Soviet Russian Cinema, The Caucasus\n" +
    "RUSS 58100 - Russian Culture\n" +
    "SOC 10000 - Introductory Sociology (satisfies Behavioral/Social Science for core)\n" +
    "SOC 22000 - Social Problems (satisfies Behavioral/Social Science for core)\n" +
    "SOC 27500 - Sociology Of Aging And The Life Course\n" +
    "SOC 31000 - Race And Ethnicity\n" +
    "SOC 31200 - American Society\n" +
    "SOC 32400 - Criminology\n" +
    "SOC 32600 - Social Conflict And Criminal Justice\n" +
    "SOC 32700 - Crime, Deviance And Mass Media\n" +
    "SOC 32800 - Criminal Justice\n" +
    "SOC 33400 - Urban Sociology\n" +
    "SOC 33500 - Political Sociology\n" +
    "SOC 33800 - Global Social Movements\n" +
    "SOC 33900 - Sociology Of Global Development\n" +
    "SOC 34000 - General Social Psychology\n" +
    "SOC 34400 - Environmental Sociology\n" +
    "SOC 35000 - Sociology Of Family\n" +
    "SOC 35200 - Drugs, Culture, And Society\n" +
    "SOC 35600 - Hate And Violence\n" +
    "SOC 36700 - Religion In America\n" +
    "SOC 36800 - The Social Significance Of Religion\n" +
    "SOC 36900 - Religion And Chinese Society\n" +
    "SOC 37400 - Medical Sociology\n" +
    "SOC 39100 - Selected Topics In Sociology Sociology of Mental Health, Employment and Law, Sociology of Gaming, Sociology of Policing\n" +
    "SOC 40200 - Sociological Theory\n" +
    "SOC 40900 - Social Networks\n" +
    "SOC 41100 - Social Inequality\n" +
    "SOC 41900 - Sociology Of Law\n" +
    "SOC 42100 - Juvenile Delinquency\n" +
    "SOC 42600 - Social Deviance And Control\n" +
    "SOC 42900 - Sociology Of Protest\n" +
    "SOC 43200 - Work In Contemporary America\n" +
    "SOC 45000 - Gender Roles In Modern Society\n" +
    "SOC 46100 - Health And Social Behavior\n" +
    "SOC 52500 - Social Movements\n" +
    "SOC 53100 - Community Organization\n" +
    "SOC 56700 - Religion In Social Context\n" +
    "SOC 56800 - Religion And Society\n" +
    "SOC 57000 - Sociology Of Education\n" +
    "SOC 57200 - Comparative Healthcare Systems\n" +
    "SOC 57300 - The Human Side Of Medicine\n" +
    "SOC 57400 - The Social Organization Of Healthcare\n" +
    "SOC 57600 - Health And Aging In Social Context\n" +
    "SOC 59100 - Selected Topics In Sociology Sociology ProSeminar, Social Psychology of Mental Disorders\n" +
    "SPAN 23100 - Cervantes’ Don Quixote\n" +
    "SPAN 23500 - Spanish American Literature In Translation Food/Culture in Hispanic World, Latin American Short Stories, Spanish American Literature in Translation (select courses satisfy Human Cultures Humanities for core)\n" +
    "SPAN 24100 - Introduction To The Study Of Hispanic Literature\n" +
    "SPAN 28000 - Second-Year Spanish: Special Topics - (Intro Latin Am & Latino Study)\n" +
    "SPAN 33000 - Spanish And Latin American Cinema (satisfies Human Cultures Humanities for core) (satisfies Written Communication for core)\n" +
    "SPAN 33500 - The Literature Of The Spanish-Speaking Peoples In The United States\n" +
    "SPAN 34100 - Hispanic Literature I: Poetry And Drama\n" +
    "SPAN 34200 - Hispanic Literature II: Prose\n" +
    "SPAN 39800 - Special Topics In Spanish  (The Hispanic World)\n" +
    "SPAN 48000 - Spanish Civilization\n" +
    "SPAN 48100 - Spanish Culture\n" +
    "SPAN 48200 - Latin American Civilization\n" +
    "SPAN 48300 - Latin American Culture\n" +
    "SPAN 48500 - Food And Culture In The Hispanic World\n" +
    "SPAN 49800 - Advanced Topics In Spanish Chicana/o & Latina/o Lit Trans, Food Culture Hispanic World, Hispanic Film in Spanish\n" +
    "SPAN 54000 - Spanish Literature Of The Middle Ages\n" +
    "SPAN 54100 - Spanish Literature Of The Golden Age\n" +
    "SPAN 54200 - Cervantes Don Quijote\n" +
    "SPAN 54300 - Spanish Literature Of The 18th And 19th Centuries\n" +
    "SPAN 54500 - Spanish Literature Of The 20th Century\n" +
    "SPAN 55000 - Spanish American Literature Of The Colonial Period\n" +
    "SPAN 55100 - Spanish American Literature Of The 19th Century\n" +
    "SPAN 55200 - Spanish American Literature From 1900 To 1970\n" +
    "SPAN 55300 - Spanish American Literature From 1970- Present\n" +
    "SPAN 55400 - Hispanic Caribbean Literature\n" +
    "SPAN 55500 - Latino/a Literature\n" +
    "SPAN 55600 - Mexican Literature\n" +
    "SPAN 59400 - Special Topics In Hispanic Literature Spanish Literature of the Middle Ages, The Contintental Novel, Transatlantic Poetry, Hispanic Film in Span Part II, Modern Spanish Comic Theater, Borders and Borderlands\n" +
    "THTR 20100 - Theatre Appreciation (satisfies Human Cultures Humanities for core)\n" +
    "THTR 38000 - History Of Theatre I\n" +
    "THTR 38100 - History Of Theatre II\n" +
    "THTR 39000 - Directed Study Of Special Theatre Problems - (Hamilton the Musical, Black Drama)\n" +
    "WGSS 28000 - Women’s, Gender, And Sexuality Studies: An Introduction (satisfies Human Cultures Humanities for core) (satisfies Behavioral/Social Science for core)\n" +
    "WGSS 28100 - Variable Topics In Women’s, Gender, And Sexuality Studies Arab Women Writers, Contemporary Foreign Women Writers in Translation, Spanish American Literature in Translation, Women Writers in Translation, Women, Gender, and Leadership, 20th Century Women Artists, Intro to Study of Religion, Wom Pol and Publ Pol\n" +
    "WGSS 28200 - Introduction To LGBTQ Studies\n" +
    "WGSS 38000 - Comparative Studies In Gender And Culture\n" +
    "WGSS 38100 - Women Of Color In The United States\n" +
    "WGSS 38200 - Love, Sex And Sexuality\n" +
    "WGSS 38300 - Women, Work, And Labor\n" +
    "WGSS 39000 - Variable Topics In Women’s, Gender And Sexuality Studies American Beauty, Gender Revolution in Mod Amer, Gender and Politics in Early Modern Europe, Literature, Queer Studies & Disability, Queens and Empresses in Early Modern Europe, Women & Games: Design Dev & Play, Understanding the NFL, Women and Leadership, Hist of Sexual Regul in US, Gender and Literature, Feminist Technoscience Studies, Latina Feminisms,Sports & Popular Feminisms,US Women Since 1870,&nbsp;Women and the Law,&nbsp;STEM and Gender,&nbsp;Women and Health in America\n" +
    "WGSS 48000 - Feminist Theory\n" +
    "WGSS 48200 - Interdisciplinary Studies In Sexuality: Scholarship On Lesbian And Gay Issues\n" +
    "WGSS 48300 - Feminisms In Global Perspective\n" +
    "WGSS 48500 - Feminist Perspectives On Film And Cinema And Visual Culture\n" +
    "WGSS 49900 - Independent Study In Women’s, Gender And Sexuality Studies Black Women Writers, African American Women and Activism, Black Women, Gender Revolution in Modern America, Women and Health in America\n" +
    "WGSS 59900 - Selected Topics In Women’s Gender And Sexuality Studies Bad Mothers in American Literature, Gender & Sexuality in Sport, Native American Women Writers, Public Pol and Family"

let genEds = []
function getGenEds() {
    let temp1 = raw.split("\n")
    let temp2
    let temp3
    temp1.forEach(el => {
        temp2 = el.split(" - ")
        temp3 = temp2[0].split(" ").reduce((a, b) => a + b)
        genEds.push(temp3)
    })
}

getGenEds()

 

rec.set("Humanities", ['AAS27100', 'AD11300', 'AD11700', 'AD12500', 'AD22600', 'AD22700', 'AD24200', 'AD25100', 'AD25500', 'AD26500', 'AD26600', 'AD27500', 'AD38300', 'AD38400', 'AMST31000', 'AMST32500', 'AMST20100', 'AMST25000', 'ANSC33100', 'ARAB10100', 'ARAB10200', 'ARAB20100', 'ARAB20200', 'ARAB23900', 'ARAB28000', 'ARAB30100', 'ARAB30200', 'ASAM24000', 'ASEC30100', 'ASEC33100', 'ASEC35500', 'ASL10100', 'ASL10200', 'ASL20100', 'ASL20200', 'CHNS10100', 'CHNS10200', 'CHNS20100', 'CHNS20200', 'CHNS24100', 'CHNS28000', 'CHNS30100', 'CHNS30200', 'CHNS33000', 'CHNS40100', 'CHNS40200', 'CLCS23010', 'CLCS23100', 'CLCS23200', 'CLCS23300', 'CLCS23500', 'CLCS23700', 'CLCS23800', 'CLCS23900', 'CLCS33900', 'CLCS38000', 'CLCS38500', 'CMPL26600', 'CMPL26700', 'DANC25000', 'DANC37800', 'EDST20000', 'ENGL11000', 'ENGL20200', 'ENGL21700', 'ENGL21800', 'ENGL21900', 'ENGL22500', 'ENGL23000', 'ENGL23700', 'ENGL23800', 'ENGL24000', 'ENGL24100', 'ENGL25000', 'ENGL26400', 'ENGL26600', 'ENGL26700', 'ENGL27600', 'ENGL28600', 'ENGL32200', 'ENGL35000', 'ENGL35100', 'ENGL36000', 'ENGL36500', 'ENGL36700', 'ENGL37300', 'ENGL38100', 'ENGL38200', 'ENGL38900', 'FR10100', 'FR10200', 'FR10500', 'FR20100', 'FR20200', 'FR20500', 'FR30100', 'FR30200', 'FR33000', 'FR40100', 'FR40200', 'GER10100', 'GER10200', 'GER10500', 'GER20100', 'GER20200', 'GER20500', 'GER23000', 'GER30100', 'GER30200', 'GER33000', 'GER40100', 'GER40200', 'GREK10100', 'GREK10200', 'GREK20100', 'GREK20200', 'GS10000', 'GSLA30100', 'HEBR10100', 'HEBR10200', 'HEBR12100', 'HEBR12200', 'HEBR20100', 'HEBR20200', 'HEBR22100', 'HEBR22200', 'HEBR28000', 'HEBR38000', 'HIST10300', 'HIST10400', 'HIST10500', 'HIST15100', 'HIST15200', 'HIST21000', 'HIST21100', 'HIST23800', 'HIST23900', 'HIST24000', 'HIST24100', 'HIST24300', 'HIST24500', 'HIST24600', 'HIST25000', 'HIST27100', 'HIST27200', 'HIST30000', 'HIST30305', 'HIST30400', 'HIST30505', 'HIST30605', 'HIST31005', 'HIST31305', 'HIST31405', 'HIST31505', 'HIST32300', 'HIST32400', 'HIST32900', 'HIST33205', 'HIST33300', 'HIST33400', 'HIST33805', 'HIST34000', 'HIST34100', 'HIST34300', 'HIST34400', 'HIST34901', 'HIST35000', 'HIST35100', 'HIST35205', 'HIST35400', 'HIST35500', 'HIST35900', 'HIST36305', 'HIST37100', 'HIST37500', 'HIST37700', 'HIST38001', 'HIST38200', 'HIST38300', 'HIST38400', 'HIST38505', 'HIST38700', 'HIST39400', 'HIST39600', 'HIST39800', 'HIST41005', 'HIST47005', 'ITAL10100', 'ITAL10200', 'ITAL10500', 'ITAL20100', 'ITAL20200', 'ITAL20500', 'ITAL28000', 'ITAL28100', 'ITAL30100', 'ITAL30200', 'ITAL33000', 'ITAL33300', 'ITAL38000', 'JPNS10100', 'JPNS10200', 'JPNS20100', 'JPNS20200', 'JPNS30100', 'JPNS30200', 'JPNS40100', 'JPNS40200', 'JWST33000', 'LATN10100', 'LATN10200', 'LATN20100', 'LATN20200', 'LATN34300', 'LATN34400', 'LATN34500', 'LATN34600', 'LATN34700', 'LATN44200', 'LATN44300', 'LATN44400', 'LATN44500', 'LATN44600', 'LC23900', 'LC33300', 'MUS11200', 'MUS13200', 'MUS25000', 'MUS26100', 'MUS36100', 'MUS37600', 'MUS37800', 'PHIL11000', 'PHIL11100', 'PHIL11400', 'PHIL20600', 'PHIL21900', 'PHIL22300', 'PHIL22500', 'PHIL23000', 'PHIL23100', 'PHIL24000', 'PHIL24200', 'PHIL27500', 'PHIL28000', 'PHIL29000', 'PHIL30100', 'PHIL30200', 'PHIL30300', 'PHIL30400', 'PHIL41100', 'PHIL42400', 'PTGS10100', 'PTGS10200', 'PTGS10500', 'PTGS20100', 'PTGS20200', 'PTGS30100', 'PTGS30200', 'REL20000', 'REL23000', 'REL23100', 'RUSS10100', 'RUSS10200', 'RUSS20100', 'RUSS20200', 'RUSS28100', 'RUSS30100', 'RUSS30200', 'RUSS33000', 'RUSS40100', 'RUSS40200', 'SPAN10100', 'SPAN10200', 'SPAN10500', 'SPAN20100', 'SPAN20200', 'SPAN20500', 'SPAN23500', 'SPAN30100', 'SPAN30200', 'SPAN30500', 'SPAN30801', 'SPAN33000', 'SPAN40100', 'SPAN40200', 'THTR20100', 'WGSS28000', 'YDAE33100', 'YDAE35500', 'InformationLiteracy', 'BIOL11500', 'COM25100', 'EDCI27000', 'EDPS10500', 'ENGL10600', 'ENGL10800', 'ENGL30400', 'ENGL38000', 'ENGR13100', 'ENGR13300', 'ENGR14100', '*ENGR16100', '*ENGR16200', 'HONR19903', 'ILS17500', 'MGMT17500', 'NUR22301', 'PHIL12000', 'PHIL26000', 'POL30000', 'PSY10000', 'SCLA10100', 'STAT11300', 'STAT30100']);
rec.set("Behavioural Science", ['AD33900', 'AGEC20300', 'AGEC20400', 'AGEC21700', 'AGEC25000', 'AGR20100', 'AMST21000', 'ANTH10000', 'ANTH20100', 'ANTH20300', 'ANTH20500', 'ANTH23000', 'ANTH37900', 'CLCS18100', 'COM21200', 'COM22400', 'ECON21000', 'ECON25100', 'ECON25200', 'ECON51400', 'EDCI28500', 'EDPS23500', 'EDPS26500', 'EDPS31600', 'EDST20010', 'EDST24800', 'ENGL22700', 'ENGL22800', 'HDFS20100', 'HDFS21000', 'HDFS28000', 'HTM37200', 'LC26100', 'LING20100', 'POL10100', 'POL12000', 'POL13000', 'POL14100', 'POL22200', 'POL22300', 'POL23000', 'POL23100', 'POL23500', 'POL32600', 'POL32700', 'POL33500', 'POL36000', 'POL37200', 'PSY12000', 'PSY12300', 'SCLA20000', 'SLHS22700', 'SOC10000', 'SOC22000', 'SOC27500', 'SOC32600', 'SOC34400', 'SOC35200', 'SOC37400', 'SOC42900', 'WGSS28000', 'WGSS28200', 'WGSS38000']);
rec.set("Oral Communication", ['COM11400', 'COM21700', 'EDCI49600', 'EDCI49800', 'EDPS31500', 'EDPS49800', 'HDFS45000', 'SCLA10200']);
rec.set("Information Literacy", ['AGR20100', 'BIOL11500', 'COM25100', 'EDCI27000', 'EDPS10500', 'ENGL10600', 'ENGL10800', 'ENGL30400', 'ENGL38000', 'ENGR13100', 'ENGR13300', 'ENGR14100', '*ENGR16100', '*ENGR16200', 'HONR19903', 'ILS17500', 'MGMT17500', 'NUR22301', 'PHIL12000', 'PHIL26000', 'POL30000', 'PSY10000', 'SCLA10100', 'STAT11300', 'STAT30100', 'TECH12000']);
rec.set("Quantitative Reasoning", ['EDCI22200', 'MA13800', 'MA15300', 'MA15400', 'MA15555', 'MA15800', 'MA15910', 'MA16010', 'MA16020', 'MA16100', 'MA16200', 'MA16500', 'MA16600', 'MA17300', 'MA17400', 'MA18100', 'MA18200', 'MA19000', 'MA22000', 'MA22100', 'MA22200', 'MA22300', 'MA22400', 'MA23100', 'MA23200', 'MA26100', 'MA26200', 'MA26500', 'MA26600', 'MA27100', 'MA27101', 'MA35100', 'MA36600', 'PHIL15000']);
rec.set("Science", ['ANTH20400', 'ASTR26300', 'ASTR26400', 'BIOL11000', 'BIOL11100', 'BIOL11200', 'BIOL11300', 'BIOL12100', 'BIOL13100', 'BIOL13500', 'BIOL14501', 'BIOL14502', 'BIOL14600', 'BIOL20100', 'BIOL20200', 'BIOL20300', 'BIOL20400', 'BIOL20500', 'BIOL20600', 'BIOL30200', 'BTNY11000', 'CHM11100', 'CHM11200', 'CHM11500', 'CHM11600', 'CHM12500', 'CHM12600', 'CHM12901', 'CHM13600', 'CHM20000', 'EAPS10200', 'EAPS10500', 'EAPS10900', 'EAPS11100', 'EAPS11200', 'EAPS11600', 'EAPS11700', 'EAPS12900', 'EAPS13800', 'EAPS22100', 'EAPS22500', 'EAPS24300', 'EAPS24400', 'EAPS31201', '*ENGR16100', '*ENGR16200', 'ENTM10500', 'ENTM20600', 'ENTM21000', 'ENTM22810', 'ENTM22820', 'HORT10100', 'NRES23000', 'NUTR20200', 'NUTR30300', 'PHYS15200', 'PHYS17200', 'PHYS21400', 'PHYS21500', 'PHYS21800', 'PHYS21900', 'PHYS22000', 'PHYS22100', 'PHYS23000', 'PHYS24100', 'PHYS27200', 'SLHS30600']);
rec.set("Science, Tech and Society", ['ABE22600', 'ABE29000', 'AD39500', 'AGRY12500', 'AGRY28500', 'AGRY29000', 'AMST31000', 'AMST32500', 'ANSC10200', 'ANTH21000', 'ASEC35500', 'ASM23600', 'BCHM10000', 'BCM10001', 'BIOL12100', 'BIOL31200', 'BTNY20100', 'BTNY21100', 'BTNY28500', 'CE35500', 'CGT17208', 'CM10000', 'COM25100', 'CS10100', 'EAPS10000', 'EAPS10400', 'EAPS10600', 'EAPS11300', 'EAPS12000', 'EAPS12500', 'EAPS12900', 'EAPS20000', 'EEE35500', 'ENGL22300', 'ENGL22600', 'ENGL23400', 'ENGR20100', 'ENGR27920', 'ENGR31000', 'ENGR37920', 'ENGR47920', 'ENTM10500', 'ENTM12800', 'ENTM21800', 'EPCS10100', 'EPCS10200', 'EPCS11100', 'EPCS12100', 'EPCS20100', 'EPCS20200', 'EPCS30100', 'EPCS30200', 'EPCS40100', 'EPCS40200', 'FNR10300', 'FNR12500', 'FNR22310', 'FNR23000', 'FNR24000', 'FS16100', 'HIST30305', 'HIST30605', 'HIST31305', 'HIST31405', 'HIST33205', 'HIST33300', 'HIST33400', 'HIST35000', 'HIST35205', 'HIST36305', 'HIST38001', 'HIST38400', 'HIST38700', 'HONR19901', 'HONR46000', 'HORT12100', 'HORT30600', 'HSCI20100', 'HSCI20200', 'IT22600', 'LA16100', 'ME29000', 'NRES12500', 'NRES29000', 'NUTR39800', 'PHIL20700', 'PHIL20800', 'PHIL22100', 'PHIL27000', 'POL22300', 'POL23700', 'PUBH20200', 'SA10202', 'SLHS11500', 'SLHS21500', 'SLHS30900', 'SOC33500', 'STAT11300', 'SYS30000', 'SYS35000', 'SYS40000', 'TECH12000', 'VIP17911', 'VIP17920', 'VIP27920', 'VIP37920', 'VIP47920', 'YDAE35500']);
rec.set("Written Composition", ['AMST10100', 'CLCS23100', 'CLCS23700', 'CLCS33900', 'COM20400', 'EDCI20500', 'ENGL10600', 'ENGL10800', 'ENGL30400', 'ENGL38000', 'HONR19903', 'PHIL26000', 'SCLA10100', 'SPAN33000']);
rec.set("Greater Issues in Science",['BIOL31200', 'BIOL48300', 'CHM49000', 'CHM49000', 'CNIT49900', 'EAPS30100', 'EAPS32700', 'EAPS36000', 'EAPS36400', 'EAPS37500', 'HIST35205', 'HONR29900', 'HONR39900', 'MA27900', 'ME49200', 'PHYS31700', 'PHYS49000', 'POL32700','STAT49000']);
rec.set("Laboratory Science", ['BIOL11000/11100', 'BIOL12100/13100/13500', 'CHM11500/11600', 'CHM12500/12600', 'EAPS11100/11200', 'PHYS17200/27200', 'PHYS17200/24100', 'PHYS17200/22100', 'PHYS21800/21900', 'PHYS22000/22100', 'PHYS23300/23400']);
rec.set("Languages",['GER10100', 'GER10200', 'GER11200', 'GER20100', 'GER20200', 'GER21100', 'GER21200', 'GER22300', 'GER22400', 'FR10100', 'FR10200', 'FR11200', 'FR20100', 'FR20200', 'FR21100', 'FR21200', 'FR22400', 'FR23000', 'FR24100', 'FR28000', 'FR30100', 'FR30200', 'FR31200', 'FR32400', 'FR33000', 'FR34100', 'FR34200', 'FR38000', 'FR39400', 'FR39600', 'FR39900', 'FR40100', 'FR40200', 'FR42400', 'FR44300', 'FR48000', 'CLCS18100', 'CLCS22000', 'CLCS23010', 'CLCS23100', 'CLCS23200', 'CLCS23300', 'CLCS23400', 'CLCS23500', 'CLCS23600', 'CLCS23700', 'CLCS23800', 'CLCS23900', 'CLCS28000', 'CLCS33700', 'CLCS33900', 'CLCS38000', 'CLCS38100',  'CLCS38300', 'CLCS38500', 'CLCS38600', 'CLCS38700', 'CLCS48000', 'CLCS48100', 'CLCS48300', 'CLCS49900', 'CHNS10100', 'CHNS10200', 'CHNS10700', 'CHNS20100', 'CHNS20200', 'CHNS20700', 'CHNS22400', 'CHNS23000', 'CHNS24100', 'CHNS28000', 'CHNS28100', 'CHNS28500', 'CHNS30100', 'CHNS30200', 'CHNS30500', 'CHNS31300', 'CHNS33000', 'CHNS34100', 'CHNS34200', 'CHNS39900', 'CHNS40100', 'CHNS40200', 'CHNS49000', 'CHNS49300', 'ARAB10100', 'ARAB10200', 'ARAB11100', 'ARAB11200', 'ARAB20100', 'ARAB20200', 'ARAB21100', 'ARAB21200', 'ARAB22400', 'ARAB23000', 'ARAB23900', 'ARAB28000', 'ARAB28100', 'ARAB30100', 'ARAB30200', 'ARAB33400']);
rec.set("Technical Writing",['ENGL30400','ENGL30900','ENGL41900','ENGL42000','ENGL42100','ENGL42201','ENGL42400','ENGL49000','MGMT39000','CHM46200', 'COM21700']);
rec.set("Technical Presentation",['BIOL44100','COM11400','COM31400','COM31500','COM32400','COM41500','SCLA10200','CHM46200', 'COM21700']);
rec.set("General Education", genEds);

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
        case "General Education":
            if (gen_ed) {
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

//Note - this is dummy variable. use the same var name you stored inputted courses in.
let courses = JSON.parse(localStorage.completedCoursesEquiv) //HERE MRIDUUUU HERE

let course_counter_temp = new Map(course_counter);
let rec_copy = new Map(rec);
course_counter_temp.get(courses[0])
for (let i = 0; i < courses.length; i++) {
    for (let j = 0; j < parseInt(course_counter_temp.get(courses[i])[0]);j++) {
        console.log("whats up")
        let link = "https://www.ratemycourses.io/purdue/course/" + courses[i];
        switch (course_counter.get(courses[i])[1][j]) {
            case "Humanities":
                document.getElementById('Humanities').innerHTML += courses[i] + ": " + '<a href="' + link + '">Rating</a>' + "<br>";
                break;
            case "Behavioural Science":
                document.getElementById('Behavioural-Science').innerHTML += courses[i] + ": " + '<a href="' + link + '">Rating</a>' + "<br>";
                break;
            case "Oral Communication":
                document.getElementById('Oral-Communication').innerHTML += courses[i] + ": " + '<a href="' + link + '">Rating</a>' + "<br>";
                break;
            case "Information Literacy":
                document.getElementById('Information-Literacy').innerHTML += courses[i] + ": " + '<a href="' + link + '">Rating</a>' + "<br>";
                break;
            case "Quantitative Reasoning":
                document.getElementById('Quantitative-Reasoning').innerHTML += courses[i] + ": " + '<a href="' + link + '">Rating</a>' + "<br>";
                break;
            case "Science":
                document.getElementById('Science').innerHTML += courses[i] + ": " + '<a href="' + link + '">Rating</a>' + "<br>";
                break;
            case "Science, Tech and Society":
                document.getElementById('Science-Tech-and-Society').innerHTML += courses[i] + ": " + '<a href="' + link + '">Rating</a>' + "<br>";
                break;
            case "Written Composition":
                document.getElementById('Written-Composition').innerHTML += courses[i] + ": " + '<a href="' + link + '">Rating</a>' + "<br>";
                break;
            case "Greater Issues in Science":
                document.getElementById('Greater-Issues-in-Science').innerHTML += courses[i] + ": " + '<a href="' + link + '">Rating</a>' + "<br>";
                break;
            case "Laboratory Science":
                document.getElementById('Laboratory-Science').innerHTML += courses[i] + ": " + '<a href="' + link + '">Rating</a>' + "<br>";
                break;
            case "Languages":
                document.getElementById('Languages').innerHTML += courses[i] + ": " + '<a href="' + link + '">Rating</a>' + "<br>";
                break;
            case "Technical Writing":
                document.getElementById('Technical-Writing').innerHTML += courses[i] + ": " + '<a href="' + link + '">Rating</a>' + "<br>";
                break;
            case "Technical Presentation":
                document.getElementById('Technical-Presentation').innerHTML += courses[i] + ": " + '<a href="' + link + '">Rating</a>' + "<br>";
                break;
            }
  
    }
    course_counter_temp.delete(courses[i]);
    rec_copy.delete(courses[i]);

}


//too lazy, please finish thiss\


//document.getElementById('Humanities1').innerHTML = (rec_copy.get("Humanities")).join("<br>");
// document.getElementById('Behavioural-Science1').innerHTML = sorted_course_counter.get("Behavioural Science");
// document.getElementById('Oral-Communication1').innerHTML = rec.get("Humanities").join("<br>");
// document.getElementById('Information-Literacy1').innerHTML = rec.get("Humanities").join("<br>");
// document.getElementById('Quantitative-Reasoning1').innerHTML = rec.get("Humanities").join("<br>");
// document.getElementById('Science1').innerHTML = rec.get("Humanities").join("<br>");
// document.getElementById('Science-Tech-and-Society1').innerHTML = rec.get("Humanities").join("<br>");
// document.getElementById('Written-Composition1').innerHTML = rec.get("Humanities").join("<br>");
// document.getElementById('Greater-Issues-in-Science1').innerHTML = rec.get("Humanities").join("<br>");
// document.getElementById('Laboratory-Science1').innerHTML = rec.get("Humanities").join("<br>");
// document.getElementById('Languages1').innerHTML = rec.get("Humanities").join("<br>");
// document.getElementById('Technical-Writing1').innerHTML = rec.get("Humanities").join("<br>");
// document.getElementById('Technical-Presentation1').innerHTML = rec.get("Humanities").join("<br>");

for (let i = 0; i < rec.get("Humanities").length; i++) {

    document.getElementById('Humanities1').innerHTML += "<div>" + (rec.get("Humanities")[i] + "<br>");
    
    if (parseInt(sorted_course_counter.get(rec.get("Humanities")[i])[0]) > 1) { //course satisfies >1 requirement
        document.getElementById('Humanities1').innerHTML += ("Satisfies ") //MRIDU reduce font size
    
        for (let j = 0; j < parseInt(sorted_course_counter.get(rec.get("Humanities")[i])[0]); j++) {
            console.log("done")
            //THIS WORKS
            if (j < parseInt(sorted_course_counter.get(rec.get("Humanities")[i])[0]) - 1) {
                document.getElementById('Humanities1').innerHTML +=  (sorted_course_counter.get(rec.get("Humanities")[i])[1][j] + ",<br>") //MRIDU reduce font size
            } else {
                document.getElementById('Humanities1').innerHTML +=  (sorted_course_counter.get(rec.get("Humanities")[i])[1][j] + "</div><br>")
            }
        }
        document.getElementById('Humanities1').innerHTML +=  "<br>"
    } else {
        document.getElementById('Humanities1').innerHTML += "</div><br>"
    }
    
}

for (let i = 0; i < rec.get("Behavioural Science").length; i++) {

    document.getElementById('Behavioural-Science1').innerHTML += "<div>" + (rec.get("Behavioural Science")[i] + "<br>");
    
    if (parseInt(sorted_course_counter.get(rec.get("Behavioural Science")[i])[0]) > 1) { //course satisfies >1 requirement
        document.getElementById('Behavioural-Science1').innerHTML += ("Satisfies ") //MRIDU reduce font size
    
        for (let j = 0; j < parseInt(sorted_course_counter.get(rec.get("Behavioural Science")[i])[0]); j++) {
            console.log("done")
            //THIS WORKS
            if (j < parseInt(sorted_course_counter.get(rec.get("Behavioural Science")[i])[0]) - 1) {
                document.getElementById('Behavioural-Science1').innerHTML +=  (sorted_course_counter.get(rec.get("Behavioural Science")[i])[1][j] + ",<br>") //MRIDU reduce font size
            } else {
                document.getElementById('Behavioural-Science1').innerHTML +=  (sorted_course_counter.get(rec.get("Behavioural Science")[i])[1][j] + "</div><br>")
            }
        }
        document.getElementById('Behavioural-Science1').innerHTML +=  "<br>"
    } else {
        document.getElementById('Behavioural-Science1').innerHTML += "</div><br>"
    }
    
}

for (let i = 0; i < rec.get("Oral Communication").length; i++) {
    document.getElementById('Oral-Communication1').innerHTML += (rec.get("Oral Communication")[i] + "<br>");
    
    if (parseInt(sorted_course_counter.get(rec.get("Oral Communication")[i])[0]) > 1) { //course satisfies >1 requirement
        document.getElementById('Oral-Communication1').innerHTML += ("Satisfies ") //MRIDU reduce font size
    
        for (let j = 0; j < parseInt(sorted_course_counter.get(rec.get("Oral Communication")[i])[0]);j++) {
            document.getElementById('Oral-Communication1').innerHTML +=  sorted_course_counter.get(rec.get("Oral Communication")[i])[1][j] + ",<br>" //MRIDU reduce font size
        }
        document.getElementById('Oral-Communication1').innerHTML +=  "<br>"
        }
    
}
for (let i = 0; i < rec.get("Information Literacy").length; i++) {
    document.getElementById('Information-Literacy1').innerHTML += (rec.get("Information Literacy")[i] + "<br>");
    
    if (parseInt(sorted_course_counter.get(rec.get("Information Literacy")[i])[0]) > 1) { //course satisfies >1 requirement
        document.getElementById('Information-Literacy1').innerHTML += ("Satisfies ") //MRIDU reduce font size
    
        for (let j = 0; j < parseInt(sorted_course_counter.get(rec.get("Information Literacy")[i])[0]);j++) {
            document.getElementById('Information-Literacy1').innerHTML +=  sorted_course_counter.get(rec.get("Information Literacy")[i])[1][j] + ",<br>" //MRIDU reduce font size
        }
        document.getElementById('Information-Literacy1').innerHTML +=  "<br>"
        }
    
}
for (let i = 0; i < rec.get("Quantitative Reasoning").length; i++) {
    document.getElementById('Quantitative-Reasoning1').innerHTML += (rec.get("Quantitative Reasoning")[i] + "<br>");
    
    if (parseInt(sorted_course_counter.get(rec.get("Quantitative Reasoning")[i])[0]) > 1) { //course satisfies >1 requirement
        document.getElementById('Quantitative-Reasoning1').innerHTML += ("Satisfies ") //MRIDU reduce font size
    
        for (let j = 0; j < parseInt(sorted_course_counter.get(rec.get("Quantitative Reasoning")[i])[0]);j++) {
            document.getElementById('Quantitative-Reasoning1').innerHTML +=  sorted_course_counter.get(rec.get("Quantitative Reasoning")[i])[1][j] + ",<br>" //MRIDU reduce font size
        }
        document.getElementById('Quantitative-Reasoning1').innerHTML +=  "<br>"
        }
    
}
for (let i = 0; i < rec.get("Science").length; i++) {
    document.getElementById('Science1').innerHTML += (rec.get("Science")[i] + "<br>");
    
    if (parseInt(sorted_course_counter.get(rec.get("Science")[i])[0]) > 1) { //course satisfies >1 requirement
        document.getElementById('Science1').innerHTML += ("Satisfies ") //MRIDU reduce font size
    
        for (let j = 0; j < parseInt(sorted_course_counter.get(rec.get("Science")[i])[0]); j++) {
            
            document.getElementById('Science1').innerHTML +=  sorted_course_counter.get(rec.get("Science")[i])[1][j] + ",<br>" //MRIDU reduce font size
        }
        document.getElementById('Science1').innerHTML +=  "<br>"
        }
    
}
for (let i = 0; i < rec.get("Science, Tech and Society").length; i++) {
    document.getElementById('Science-Tech-and-Society1').innerHTML += (rec.get("Science, Tech and Society")[i] + "<br>");
    
    if (parseInt(sorted_course_counter.get(rec.get("Science, Tech and Society")[i])[0]) > 1) { //course satisfies >1 requirement
        document.getElementById('Science-Tech-and-Society1').innerHTML += ("Satisfies ") //MRIDU reduce font size
    
        for (let j = 0; j < parseInt(sorted_course_counter.get(rec.get("Science, Tech and Society")[i])[0]); j++) {
            document.getElementById('Science-Tech-and-Society1').innerHTML +=  sorted_course_counter.get(rec.get("Science, Tech and Society")[i])[1][j] + ",<br>" //MRIDU reduce font size
        }
        document.getElementById('Science-Tech-and-Society1').innerHTML +=  "<br>"
        }
    
}
for (let i = 0; i < rec.get("Written Composition").length; i++) {
    document.getElementById('Written-Composition1').innerHTML += (rec.get("Written Composition")[i] + "<br>");
    
    if (parseInt(sorted_course_counter.get(rec.get("Written Composition")[i])[0]) > 1) { //course satisfies >1 requirement
        document.getElementById('Written-Composition1').innerHTML += ("Satisfies ") //MRIDU reduce font size
    
        for (let j = 0; j < parseInt(sorted_course_counter.get(rec.get("Written Composition")[i])[0]);j++) {
            document.getElementById('Written-Composition1').innerHTML +=  sorted_course_counter.get(rec.get("Written Composition")[i])[1][j] + ",<br>" //MRIDU reduce font size
        }
        document.getElementById('Written-Composition1').innerHTML +=  "<br>"
        }
    
}
for (let i = 0; i < rec.get("Greater Issues in Science").length; i++) {
    document.getElementById('Greater-Issues-in-Science1').innerHTML += (rec.get("Greater Issues in Science")[i] + "<br>");
    
    if (parseInt(sorted_course_counter.get(rec.get("Greater Issues in Science")[i])[0]) > 1) { //course satisfies >1 requirement
        document.getElementById('Greater-Issues-in-Science1').innerHTML += ("Satisfies ") //MRIDU reduce font size
    
        for (let j = 0; j < parseInt(sorted_course_counter.get(rec.get("Greater Issues in Science")[i])[0]);j++) {
            document.getElementById('Greater-Issues-in-Science1').innerHTML +=  sorted_course_counter.get(rec.get("Greater Issues in Science")[i])[1][j] + ",<br>"//MRIDU reduce font size
        }
        document.getElementById('Greater-Issues-in-Science1').innerHTML +=  "<br>"
        }
    
}
for (let i = 0; i < rec.get("Laboratory Science").length; i++) {
    document.getElementById('Laboratory-Science1').innerHTML += (rec.get("Laboratory Science")[i] + "<br>");
    
    if (parseInt(sorted_course_counter.get(rec.get("Laboratory Science")[i])[0]) > 1) { //course satisfies >1 requirement
        document.getElementById('Laboratory-Science1').innerHTML += ("Satisfies ") //MRIDU reduce font size
    
        for (let j = 0; j < parseInt(sorted_course_counter.get(rec.get("Laboratory Science")[i])[0]);j++) {
            document.getElementById('Laboratory-Science1').innerHTML +=  sorted_course_counter.get(rec.get("Laboratory Science")[i])[1][j] + ",<br>" //MRIDU reduce font size
        }
        document.getElementById('Laboratory-Science1').innerHTML +=  "<br>"
        }
    
}
for (let i = 0; i < rec.get("Languages").length; i++) {
    document.getElementById('Languages1').innerHTML += (rec.get("Languages")[i] + "<br>");
    
    if (parseInt(sorted_course_counter.get(rec.get("Languages")[i])[0]) > 1) { //course satisfies >1 requirement
        document.getElementById('Languages1').innerHTML += ("Satisfies ") //MRIDU reduce font size
    
        for (let j = 0; j < parseInt(sorted_course_counter.get(rec.get("Languages")[i])[0]);j++) {
            document.getElementById('Languages1').innerHTML +=  sorted_course_counter.get(rec.get("Languages")[i])[1][j] + ",<br>"//MRIDU reduce font size
        }
        document.getElementById('Languages1').innerHTML +=  "<br>"
        }
    
}
for (let i = 0; i < rec.get("Technical Writing").length; i++) {
    document.getElementById('Technical-Writing1').innerHTML += (rec.get("Technical Writing")[i] + "<br>");
    
    if (parseInt(sorted_course_counter.get(rec.get("Technical Writing")[i])[0]) > 1) { //course satisfies >1 requirement
        document.getElementById('Technical-Writing1').innerHTML += ("Satisfies ") //MRIDU reduce font size
    
        for (let j = 0; j < parseInt(sorted_course_counter.get(rec.get("Technical Writing")[i])[0]);j++) {
            document.getElementById('Technical-Writing1').innerHTML +=  sorted_course_counter.get(rec.get("Technical Writing")[i])[1][j] + ",<br>" //MRIDU reduce font size
        }
        document.getElementById('Technical-Writing1').innerHTML +=  "<br>"
        }
    
}
for (let i = 0; i < rec.get("Technical Presentation").length; i++) {
    document.getElementById('Technical-Presentation1').innerHTML += (rec.get("Technical Presentation")[i] + "<br>");
    
    if (parseInt(sorted_course_counter.get(rec.get("Technical Presentation")[i])[0]) > 1) { //course satisfies >1 requirement
        document.getElementById('Technical-Presentation1').innerHTML += "Satisfies "; //MRIDU reduce font size
    
        for (let j = 0; j < parseInt(sorted_course_counter.get(rec.get("Technical Presentation")[i])[0]);j++) {
            document.getElementById('Technical-Presentation1').innerHTML +=  sorted_course_counter.get(rec.get("Technical Presentation")[i])[1][j] + ",<br>" //MRIDU reduce font size
        }
        document.getElementById('Technical-Presentation1').innerHTML +=  "<br>"
        }
    
}

let categoriesarray = ["Humanities", "Behavioural Science", "Oral Communication", "Information Literacy", "Quantitative Reasoning", "Science", "Science, Tech and Society", "Written Communication", "Greater Issues in Science", "Laboratory Sciences", "Languages", "Technical Writing", "Technical Presentation"]
let idarray = ["Humanities1", "Behavioural-Science1", "Oral-Communication1", "Information-Literacy1", "Quantitative-Reasoning1", "Science1", "Science-Tech-and-Society1", "Written-Communication1", "Greater-Issues-in-Science1", "Laboratory-Sciences1", "Languages1", "Technical-Writing1", "Technical-Presentation1"]

// for (let e = 0; e < categoriesarray.length; e++) {
//     for (let i = rec.get(categoriesarray[e]).length - 1; i >= 0; i--) {

//         document.getElementById(idarray[e]).innerHTML += (rec_copy.get(categoriesarray[e])[i] + "<br>");
//         if (sorted_course_counter.get(rec_copy.get(categoriesarray[e])[i])[0] > 1) { //course satisfies >1 requirement
//         console.log("course"  + (rec_copy.get(categoriesarray[0])[0]))
//         document.getElementById(idarray[e]).innerHTML += ("Satisfies ") //MRIDU reduce font size

//         for (let j = 0; j < parseInt(sorted_course_counter.get(rec_copy.get(categoriesarray[e])[0])[0]); j++) {
//             document.getElementById(idarray[e]).innerHTML +=  (sorted_course_counter.get(rec_copy.get(categoriesarray[e])[0])[1][j] + " ") //MRIDU reduce font size
            
//         }
//         document.getElementById(idarray[e]).innerHTML +=  "<br>"

//     }

//     }
// }

