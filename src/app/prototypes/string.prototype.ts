interface String {
  snakeToCamel(): string;
  firstLetterUpperCase(): string;
  underscore(): string;
}

String.prototype.snakeToCamel = function(this: string) {
  const str = this;
  return str.replace(/_\w/g, function(m) {
    return m[1].toUpperCase();
  });
};

String.prototype.firstLetterUpperCase = function(this: string) {
  const str = this;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

String.prototype.underscore = function(this: string) {
  const str = this;
  return !str ? null : str.replace(/([A-Z])/g, function (g) {
    return (str.indexOf(g[0]) === 0) ? g[0].toLowerCase() : ('_' + g[0].toLowerCase());
  });
};

