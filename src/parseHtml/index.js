import htmlparser from 'htmlparser2-without-node-native';

export default function parseHtml(rawHtml) {
  const options = {
    recognizeSelfClosing: true,
    lowerCaseAttributeNames: true,
    lowerCaseTags: true,
    decodeEntities: true,
  };
  let parsedHtml = [];
  const parser = new htmlparser.Parser(
    new htmlparser.DomHandler((_err, dom) => {
      parsedHtml = dom;
    }, options),
  );
  parser.write(rawHtml);
  parser.end();
  return parsedHtml;
}
