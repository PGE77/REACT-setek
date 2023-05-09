function odstranDiakritiku(text) {
    return text.toLowerCase().replace(/[^a-zA-Z0-9]/g, function (c) {
      switch (c) {
        case "á":
          return "a";
        case "č":
          return "c";
        case "ď":
          return "d";
        case "é":
          return "e";
        case "ě":
          return "e";
        case "í":
          return "i";
        case "ň":
          return "n";
        case "ó":
          return "o";
        case "ř":
          return "r";
        case "š":
          return "s";
        case "ť":
          return "t";
        case "ú":
          return "u";
        case "ů":
          return "u";
        case "ý":
          return "y";
        case "ž":
          return "z";
        case "Á":
          return "A";
        case "Č":
          return "C";
        case "Ď":
          return "D";
        case "É":
          return "E";
        case "Ě":
          return "E";
        case "Í":
          return "I";
        case "Ň":
          return "N";
        case "Ó":
          return "O";
        case "Ř":
          return "R";
        case "Š":
          return "S";
        case "Ť":
          return "T";
        case "Ú":
          return "U";
        case "Ů":
          return "U";
        case "Ý":
          return "Y";
        case "Ž":
          return "Z";
        case " ":
          return "-";
        default:
          return c;
      }
    });
  }

  export default odstranDiakritiku