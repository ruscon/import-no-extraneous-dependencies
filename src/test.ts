// minimist is not declared in the package.json
// but no errors here, because @types/minimist is declared
import parseArgs from 'minimist';

// should show an error, because no @types/lodash and no lodash installed/declared
import { ordery } from 'lodash';

parseArgs();
