/**
 * Created by Roman Spiridonov <romars@phystech.edu> on 11/20/2017.
 */

function dos2nix(fileStr) {
  return fileStr.replace(/\r\n/g, "\n");
}

function nix2dos(fileStr) {
  return dos2nix(fileStr).replace(/\n/g, "\r\n");
}

exports.dos2nix = dos2nix;
exports.nix2dos = nix2dos;
