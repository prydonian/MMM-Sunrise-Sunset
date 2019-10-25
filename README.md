# MMM-Sunrise-Sunset
A MagicMirror module to show local sunrise/sunset/noon times
> This is an extension to the [MagicMirror](https://github.com/MichMich/MagicMirror) project, allowing the display of local sunrise, sunset and solar noon times.

![](https://raw.githubusercontent.com/prydonian/MMM-Sunrise-Sunset/master/.github/Screenshot.png)

## Installation
Run these commands at the root of your magic mirror install.

```shell
cd modules
git clone https://github.com/prydonian/MMM-Sunrise-Sunset
```

## Using the module
To use this module, add the following configuration block to the modules array in the `config/config.js` file.
Works best in the bottom_bar position.

```js
var config = {
    modules: [
        {
            module: 'MMM-Sunrise-Sunset',
            position: "bottom_bar",
            config: {
                // See below for configurable options
            }
        }
    ]
}
```

<table width="100%">
	<!-- why, markdown... -->
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td><code>latitude</code></td>
			<td>
      Your local latitude
			</td>
		</tr>
		<tr>
			<td><code>longitude</code></td>
			<td>
      Your local longitude
			</td>
		</tr>
	</tbody>
</table>
