
import { search, recursionSearch } from '../src/binary-search'
import { testBinraySearch } from './binray-search'

testBinraySearch(search, '二分查找之普通循环')
testBinraySearch(recursionSearch, '二分查找之递归算法')