/**
 * V = {1,2,3,4,5}, E = {{1,2},{2,3},{3,4},{4,5}}
 * S = {1}, W = {4,5}
 * 
 *  fs(S,W) = {
 *      - vacío     si hay conflicto en S
 *      - S         si W es vacío
 *      - conj_de_max_card(
 *          fs(S + {w}, W - {w}), 
 *          fs(S, W-{w})
 *        )
 *  }
 */

