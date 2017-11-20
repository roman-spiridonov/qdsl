/**
 * Created by Roman Spiridonov <romars@phystech.edu> on 11/20/2017.
 */

function dos2nix(fileStr) {
  return fileStr.replace(/\r\n/g, "\n");
}

exports.dos2nix = dos2nix;
