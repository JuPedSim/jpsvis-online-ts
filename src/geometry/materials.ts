/*
 * \file materials.ts
 * \date 2020 - 6 - 26
 * \author Tao Zhong
 * \copyright <2009 - 2020> Forschungszentrum Jülich GmbH. All rights reserved.
 *
 * \section Lincense
 * This file is part of JuPedSim.
 *
 * JuPedSim is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 *  any later version.
 *
 * JuPedSim is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with JuPedSim. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Materials used in three.js scenes.
 */

import * as three from 'three';

const textureLoader = new three.TextureLoader();

const loadRepeatedTexture = (url: string) =>
	textureLoader.load(url, texture => {
		texture.wrapS = texture.wrapT = three.RepeatWrapping;
	});

export const LAND = new three.MeshPhysicalMaterial({
	color: 0x888888,
	metalness: 0.1,
	roughness: 1.0,
	clearcoat: 0.1,
	clearcoatRoughness: 1.0,
	reflectivity: 0.05,
	// We use polygonOffset to counter z-fighting with roadways.
	polygonOffset: true,
	polygonOffsetFactor: +2,
	polygonOffsetUnits: 1,
});