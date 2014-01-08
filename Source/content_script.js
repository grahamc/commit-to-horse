
// Hackz... I'm sorry.
String.prototype.repeat = function( num )
{
    return new Array( Math.ceil(num + 1) ).join( this );
}

var commitToHorse = new function() {
  this.whin = true;

  this.classpath = function(elem_type, class_name) {
    return "//" + elem_type + "[contains(concat(' ',normalize-space(@class),' '),' " + class_name + " ')]"
  }

  this.go = function() {
    var paths = [
      this.classpath('p', 'commit-title') + '/a',
      this.classpath('div', 'commit-desc') + '/pre'
    ]

    var targets = []

    var elems;
    for (var i = 0; i < paths.length; i++) {
      elems = document.evaluate(paths[i], document, null, XPathResult.ANY_TYPE, null );
      var commit;

      while (commit = elems.iterateNext()) {
        targets.push(commit);
      }
    }

    for (var i = 0; i < targets.length; i++) {
      targets[i].textContent = this.rehorse(targets[i].textContent);
    }
  }

  this.rehorse = function(txt)
  {
    var v = "";

    var words = txt.split(/([\w']+)/)
    for (var i = 0; i < words.length; i++) {
      wordlen = words[i].length;
      if (wordlen < 4) {
        v += words[i];
      } else if (wordlen == 4) {
        v += "neigh";
      } else {
        halflen = wordlen / 2;
        if (this.whin) {
          this.whin = !this.whin;
          v += "wh" + "i".repeat(halflen) + "n" + "e".repeat(halflen) + "y";
        } else {
          v += "n" + "e".repeat(halflen) + "i".repeat(halflen) + "gh"
        }
      }
    }

    this.whin = !this.whin;

    return v;
  }
}

commitToHorse.go()

